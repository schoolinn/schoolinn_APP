import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

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
    
<<<<<<< HEAD
    let url = "http://192.168.0.110:3000/tag_art/"+this.data.Id;
=======
    let url = "http://192.168.1.110:3000/tag_art/"+this.data.Id;
>>>>>>> 013cb89310226296f266694d5729877ec025188b

    this.http.get(url)
      .subscribe((res) => {
        //console.log(res['_body']);
        var idas = res['_body']
        this.list = JSON.parse(idas)['data']
      });
  }

  //打开文章详情
  openArticle( data ){
    this.navCtrl.push( 'SeeArticlePage',{
      data: data
    } );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TagPage');
  }

}
