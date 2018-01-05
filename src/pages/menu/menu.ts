import { TypesPage } from './../types/types';
import { VideoPage } from './../video/video';
import { ExercisePage } from './../exercise/exercise';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NounPage } from '../noun/noun';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }
   noun(){
     this.navCtrl.push(NounPage);
   }

   exercise(){
     this.navCtrl.push(ExercisePage);
   }

   video(){
     this.navCtrl.push(VideoPage);
   }

   TypeNoun(){

    this.navCtrl.push(TypesPage);
   }

}
