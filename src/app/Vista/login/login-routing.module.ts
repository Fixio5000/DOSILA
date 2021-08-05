import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPage } from './login.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  },
  {
    path: 'new-password',
    loadChildren: () => import('../../Vista/login/new-password/new-password.module').then( m => m.NewPasswordPageModule)
  },
  {
    path: 'send-verification',
    loadChildren: () => import('../../Vista/login/send-verification/send-verification.module').then( m => m.SendVerificationPageModule)
  },
  {
    path: 'user-login',
    loadChildren: () => import('../../Vista/login/user-login/user-login.module').then( m => m.UserLoginPageModule)
  },
  {
    path: 'user-register',
    loadChildren: () => import('../../Vista/login/user-register/user-register.module').then( m => m.UserRegisterPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
