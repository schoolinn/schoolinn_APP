import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SeeQuePage } from './see-que';

@NgModule({
  declarations: [
    SeeQuePage,
  ],
  imports: [
    IonicPageModule.forChild(SeeQuePage),
  ],
})
export class SeeQuePageModule {}
