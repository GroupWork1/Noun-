import { ExamplesPage } from './../examples/examples';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NounPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-noun',
  templateUrl: 'noun.html',
})
export class NounPage {

magic: boolean= false;
clicked:boolean =true;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.clicked= true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NounPage');
  }

  exampls(){
    this.navCtrl.push(ExamplesPage);
  }

   ToShow(){
    
      this.magic = true;
   }

}
