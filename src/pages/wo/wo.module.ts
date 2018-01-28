import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WoPage } from './wo';

@NgModule({
  declarations: [
    WoPage,
  ],
  imports: [
    IonicPageModule.forChild(WoPage),
  ],
})
export class WoPageModule {}
