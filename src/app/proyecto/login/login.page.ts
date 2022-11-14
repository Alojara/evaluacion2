import { Component, OnInit } from '@angular/core';
import { FormGroup, Validator, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  fLogin: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController) {

    this.fLogin = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required)

    })


  }

  ngOnInit() {
  }
  async ingresar(){
    var f = this.fLogin.value;

    var usuario = JSON.parse(localStorage.getItem('usuario'));

    if(usuario.nombre == f.nombre && usuario.password == f.password){
      console.log('Ingresado');
      localStorage.setItem('ingresado','true');
      this.navCtrl.navigateRoot('inicio');

    }else{
      const alert = await this.alertController.create({
        header: 'Credenciales incorrectas',
        message: 'Usuario no exisente',
        buttons: ['Aceptar'],
      });

      await alert.present();

    }
  }
}
