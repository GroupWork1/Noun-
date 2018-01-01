import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { MenuPage } from '../menu/menu';

/**
 * Generated class for the HelpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-help',
  templateUrl: 'help.html',
})
export class HelpPage {
  //tab1:any;
 // tab2:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   // this.tab1=HelpPage;
    //this.tab2 = MenuPage;
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelpPage');
  }

}
