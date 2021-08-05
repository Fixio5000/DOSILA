import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/Controlador/services/auth.service';
import { User } from 'src/app/Controlador/shared/user.interface';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page {
  user$:Observable<User> = this.authSvc.afAuth.user;

  langs: string [] = [];
  
  constructor(private authSvc:AuthService, private router:Router, private translateService: TranslateService) {
    this.langs = this.translateService.getLangs();
   }

  onLogout(): void{
    this.authSvc.logout(); 
    this.router.navigate(['login'])     
  }

  changeLang(event){
    this.translateService.use(event.detail.value);
  }
  
}