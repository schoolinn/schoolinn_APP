import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Headers, Http } from '@angular/http';

/**
 * Generated class for the TagPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tag',
  templateUrl: 'tag.html',
})
export class TagPage {

  data: any = {};
  list: any = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public http: Http
  ) {
      this.data = this.navParams.get("data");
      this.init();
  }

  init(){
    
    let url = "http://192.168.1.104:3000/tag_art/"+this.data.Id;

    this.http.get(url)
      .subscribe((res) => {
        console.log(res['_body']);
        var idas = res['_body']
        this.list = JSON.parse(idas)['data']
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TagPage');
  }

}
