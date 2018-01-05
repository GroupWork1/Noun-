import { UncountableNounPage } from './../uncountable-noun/uncountable-noun';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProperNounPage } from '../proper-noun/proper-noun';
import { ImproperNounPage } from '../improper-noun/improper-noun';
import { CommonNounPage } from '../common-noun/common-noun';
import { CountableNounPage } from '../countable-noun/countable-noun';

/**
 * Generated class for the TypesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-types',
  templateUrl: 'types.html',
})
export class TypesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TypesPage');
  }

// the codes for the types of noun
items = [
  'Proper Noun',
  'Material Noun',
  'Common Noun',
  'Countable Noun',
  'Uncountable Noun',
  
];

itemSelected(item: string) {
  console.log("Selected Item", item);

  if(item =='Proper Noun'){
    
      this.navCtrl.push(ProperNounPage);
    
  }
  else 
  if (item =='Material Noun'){
    this.navCtrl.push(ImproperNounPage);
  }

  else 
  if (item =='Common Noun'){
    this.navCtrl.push(CommonNounPage);
  }

  else 
  if (item =='Countable Noun'){
    this.navCtrl.push(CountableNounPage);
  }

  else 
  {
    this.navCtrl.push(UncountableNounPage);
  }
}



}
