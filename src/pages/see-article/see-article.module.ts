import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SeeArticlePage } from './see-article';

@NgModule({
  declarations: [
    SeeArticlePage,
  ],
  imports: [
    IonicPageModule.forChild(SeeArticlePage),
  ],
})
export class SeeArticlePageModule {}
