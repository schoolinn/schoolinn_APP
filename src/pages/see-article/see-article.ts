import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser'

/**
 * Generated class for the SeeArticlePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var $:any
@IonicPage()
@Component({
  selector: 'page-see-article',
  templateUrl: 'see-article.html',
})
export class SeeArticlePage {

  data:any = {}

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public sanitizer: DomSanitizer
  ) {
    this.data = this.navParams.get("data");
    console.log(this.data);
  }

  tr(html){
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad SeeArticlePage');
  }

  ionViewDidEnter(){
    
  }

}
