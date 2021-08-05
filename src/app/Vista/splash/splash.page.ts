import { Component} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage {
  audio = new Audio("../../assets/audio/sonido.mp3");
  constructor(public router:Router) {
    this.audio.play()
    setTimeout((user)=>{
      if(user){
        this.router.navigateByUrl('login');
        return true;
      }else{
        this.router.navigateByUrl('tabs');
        return false; 
      }
    },4000); 
  }
}