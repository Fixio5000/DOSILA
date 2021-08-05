import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Controlador/services/auth.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.page.html',
  styleUrls: ['./new-password.page.scss'],
})
export class NewPasswordPage {

  constructor(private authSvs:AuthService, private router:Router, public alertCtrl:AlertController) { }

  async onResetPassword(email){
    try{
      await this.authSvs.resetPassword(email.value);
      const alert =await this.alertCtrl.create({
        message: 'Revisa tu correo',
        buttons: ['OK'] 
      });
      await alert.present();
      this.router.navigate(['/login/user-login']);
    }catch(error){
      console.log('Error->', error);
      const alert =await this.alertCtrl.create({
        header: 'Error',
        message: 'Email incorrecto',
        buttons: ['OK']
      });
      await alert.present();
    }
  }
}