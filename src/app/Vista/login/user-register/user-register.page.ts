import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Controlador/services/auth.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.page.html',
  styleUrls: ['./user-register.page.scss'],
})
export class UserRegisterPage{

  constructor(private authSvc:AuthService, private router: Router, public alertCtrl:AlertController) { }

  async onRegister(email, password){
    try{
      const user = await this.authSvc.register(email.value, password.value);
      if(user){
        const isVerified = this.authSvc.isEmailVerified(user);
        this.redirectUser(isVerified);
      }else{
        const alert =await this.alertCtrl.create({
          header: 'Error',
          message: 'Email incorrecto',
          buttons: ['OK']
        });
        await alert.present();
      }
    }catch(error){
      console.log('Error', error);
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
