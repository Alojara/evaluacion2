import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./proyecto/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./proyecto/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'listar',
    loadChildren: () => import('./proyecto/listar/listar.module').then( m => m.ListarPageModule)
  },
  {
    path: 'detalle-prod',
    loadChildren: () => import('./proyecto/detalle-prod/detalle-prod.module').then( m => m.DetalleProdPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
