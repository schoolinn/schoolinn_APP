import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SubPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sub',
  templateUrl: 'sub.html',
})
export class SubPage {

  rootNavCtrl: NavController;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
    this.rootNavCtrl = this.navCtrl;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubPage');
  }

  //打开标签详情
  openTag(){
    this.rootNavCtrl.push( 'TagPage' );
  }

}
