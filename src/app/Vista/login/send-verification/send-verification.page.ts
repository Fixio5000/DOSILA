import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/Controlador/services/auth.service';
import { User } from 'src/app/Controlador/shared/user.interface';

@Component({
  selector: 'app-send-verification',
  templateUrl: './send-verification.page.html',
  styleUrls: ['./send-verification.page.scss'],
})
export class SendVerificationPage{
  user$:Observable<User>=this.authSvc.afAuth.user;
  constructor(private authSvc: AuthService) { }


  async onSendEmail(): Promise<void> {
    try{
     await this.authSvc.sendVerificationEmail();
    }catch(error){
      console.log('Error->', error);
    }
    
  }

  ngOnDestroy(): void {
    this.authSvc.logout();
  }

}