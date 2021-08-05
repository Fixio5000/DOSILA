import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor(
    public router:Router,
    private traslateService: TranslateService
  ) {
    this.traslateService.setDefaultLang('Español');
    this.traslateService.addLangs(['Español', 'English']);
    this.initializeApp();
  }

  initializeApp(){
    this.router.navigateByUrl('splash');
  }
}
