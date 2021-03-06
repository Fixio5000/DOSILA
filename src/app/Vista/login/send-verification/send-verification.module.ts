import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SendVerificationPageRoutingModule } from './send-verification-routing.module';

import { SendVerificationPage } from './send-verification.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SendVerificationPageRoutingModule,
    TranslateModule
  ],
  declarations: [SendVerificationPage]
})
export class SendVerificationPageModule {}
