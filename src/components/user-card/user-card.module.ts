import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { UserCardComponent } from './user-card';

@NgModule({
  declarations: [
    UserCardComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    UserCardComponent
  ]
})
export class UserCardComponentModule {}