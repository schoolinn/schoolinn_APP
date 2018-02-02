import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SeeQuePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-see-que',
  templateUrl: 'see-que.html',
})
export class SeeQuePage {

  data:any = {}

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
    this.data = this.navParams.get("data");
    console.log( this.data );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SeeQuePage');
  }

}
