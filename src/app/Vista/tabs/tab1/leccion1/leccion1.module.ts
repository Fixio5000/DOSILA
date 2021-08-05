import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Leccion1PageRoutingModule } from './leccion1-routing.module';

import { Leccion1Page } from './leccion1.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Leccion1PageRoutingModule,
    TranslateModule
  ],
  declarations: [Leccion1Page]
})
export class Leccion1PageModule {}
