import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { UserCardComponentModule } from '../../components/user-card/user-card.module';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    UserCardComponentModule,
    IonicPageModule.forChild(HomePage),
  ],
})
export class HomePageModule {}
