import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

/**
 * Generated class for the QuestionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-question',
  templateUrl: 'question.html',
})
export class QuestionPage {

  idata:any = [];
<<<<<<< HEAD
  rootNavCtrl: NavController;
=======
>>>>>>> 013cb89310226296f266694d5729877ec025188b

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public http: Http
  ) {
<<<<<<< HEAD
    this.rootNavCtrl = this.navCtrl;
=======
>>>>>>> 013cb89310226296f266694d5729877ec025188b
    this.init();
  }

  init(){
<<<<<<< HEAD
    let url = "http://192.168.0.110:3000/que";

    this.http.get(url)
      .subscribe((res) => {
        //console.log(res['_body']);
        var idas = res['_body']
        this.idata = JSON.parse(idas)['data']
      });
  }

  //打开标签详情
  openQue( data ){
    this.rootNavCtrl.push( 'SeeQuePage',{
      data: data
    } );
=======
    let url = "http://192.168.0.107:3000/que";

    this.http.get(url)
      .subscribe((res) => {
        console.log(res['_body']);
        var idas = res['_body']
        this.idata = JSON.parse(idas)['data']
      });
>>>>>>> 013cb89310226296f266694d5729877ec025188b
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionPage');
  }

}
