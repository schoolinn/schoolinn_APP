import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Headers, Http } from '@angular/http';

/**
 * Generated class for the ArticlePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-article',
  templateUrl: 'article.html',
})
export class ArticlePage {

  idata:any = [];
  rootNavCtrl: NavController;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public http: Http
  ) {
    this.rootNavCtrl = this.navCtrl;
    this.init()
  }

  init(){
    let url = "http://192.168.1.110:3000/article";

    this.http.get(url)
      .subscribe((res) => {
        console.log(res['_body']);
        var idas = res['_body']
        this.idata = JSON.parse(idas)['data']
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArticlePage');
  }

  //打开文章详情
  openArticle( data ){
    this.rootNavCtrl.push( 'SeeArticlePage',{
      data: data
    } );
  }

}
