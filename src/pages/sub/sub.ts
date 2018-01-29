import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

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

  idata:any = [];
  rootNavCtrl: NavController;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public http: Http
  ) {
    this.rootNavCtrl = this.navCtrl;
    this.init();
  }

  init(){
    let url = "http://192.168.1.104:3000/tag";

    this.http.get(url)
      .subscribe((res) => {
        console.log(res['_body']);
        var idas = res['_body']
        this.idata = JSON.parse(idas)['data']
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubPage');
  }

  //打开标签详情
  openTag( data ){
    this.rootNavCtrl.push( 'TagPage',{
      data: data
    } );
  }

}
