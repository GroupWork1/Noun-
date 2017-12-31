import { HelpPage } from './../help/help';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuPage } from '../menu/menu';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
tab1:any;
tab2:any;
  constructor(public navCtrl: NavController) {
    this.tab1=HelpPage;
    this.tab2 = MenuPage;
  }

}
