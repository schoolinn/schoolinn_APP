import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/**
 * Generated class for the UserCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'user-card',
  templateUrl: 'user-card.html'
})
export class UserCardComponent {

  rootNavCtrl: NavController;

  constructor(
    public navCtrl: NavController
  ) {
    this.rootNavCtrl = this.navCtrl;
    console.log('Hello UserCardComponent Component');
  }

  //查看TA的详细页面
  openWo(){
    this.rootNavCtrl.push( 'WoPage' );
  }

}
