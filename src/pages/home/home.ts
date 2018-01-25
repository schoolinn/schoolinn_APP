import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Headers, Http } from '@angular/http';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var $:any;
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  idata:any = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public http: Http
  ) {
    this.init();
  }

  init(){
    let url = "http://localhost:3000/ping";

    this.http.get(url)
      .subscribe((res) => {
        console.log(res['_body']);
        var idas = res['_body']
        this.idata = JSON.parse(idas)['data']
      });
  }

  ionViewDidLoad() {
  }

}
