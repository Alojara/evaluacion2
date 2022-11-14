import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator,FormBuilder, Validators } from '@angular/forms';
import { AlertController ,NavController} from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  fRegistro: FormGroup;
  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController) {

    this.fRegistro = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required),
      'passwordConfir': new FormControl("",Validators.required)

    });

  }

  ngOnInit() {
  }

async guardar(){
    var f =this.fRegistro.value;

    if(this.fRegistro.invalid){
      localStorage.setItem('ingresado','true');
      this.navCtrl.navigateRoot('login');

      const alert = await this.alertController.create({
        header: 'Datos incompleto',
        message: 'Debe llenar todos los datos',
        buttons: ['Aceptar'],
      });

      console.log('Carga terminada');
      await alert.present();
      return;
     }

    var usuario = {
      nombre: f.nombre,
      password: f.password
    }

    localStorage.setItem('usuario',JSON.stringify(usuario));
  }

}
