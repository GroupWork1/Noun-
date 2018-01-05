import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
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


  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
   // this.tab1=HelpPage;
    //this.tab2 = MenuPage;
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelpPage');
  }

  // for the alert for comment

  showPrompt() {
    let prompt = this.alertCtrl.create({
     title: 'Comments',
      message: "**Send Us Your Comments",
      inputs: [
        {
          name: 'title',
          placeholder: 'Type your comments here'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

    //for the peoples

    showAlert() {
      let alert = this.alertCtrl.create({
        title: 'Developers',
        subTitle: '<ion-list><ion-item> <ion-thumbnail item-center>  <img src="../assets/imgs/cmN.jpg" />  </ion-thumbnail></ion-item></ion-list> <p>A Project work by Final year students in Valley View University- B.Ed IT </p>',
        

        buttons: ['OK']
      });
      alert.present();
    }

    showCall() {
      let alert = this.alertCtrl.create({
        title: 'Developers',
        subTitle: ' <a href="Tel:077665">call</a> ',
    
        
       // buttons: ['Call']
      });
      alert.present();
    }
  

}
