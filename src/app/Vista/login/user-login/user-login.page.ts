import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/Controlador/services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.page.html',
  styleUrls: ['./user-login.page.scss'],
})
export class UserLoginPage {

  constructor(private authSvc:AuthService, private router: Router, public alertCtrl:AlertController) { }

  async onLogin(email, password){
    try{
      const user = await this.authSvc.login(email.value, password.value);
      if (user){
        const isVerified = this.authSvc.isEmailVerified(user);
        this.redirectUser(isVerified);
      }else{
        const alert =await this.alertCtrl.create({
          header: 'Error',
          message: 'Contraseña o Email incorrecto',
          buttons: ['OK']
        });
        await alert.present();
      }
    }catch(error){
      console.log('Error->', error);
    }
  }

  private redirectUser(isVerified:boolean): void {
    if(isVerified){
      this.router.navigate(['tabs']);
    }else{
      this.router.navigate(['/login/send-verification']);
    }
  }
}
