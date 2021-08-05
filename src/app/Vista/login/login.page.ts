import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Controlador/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(private authSvc:AuthService, private router: Router) {}

  async onLoginGoogle(){
    try{
      const user = await this.authSvc.loginGoogle();
      if (user){
        const isVerified = this.authSvc.isEmailVerified(user);
        this.redirectUser(isVerified);
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

