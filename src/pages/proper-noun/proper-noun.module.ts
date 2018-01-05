import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProperNounPage } from './proper-noun';

@NgModule({
  declarations: [
    ProperNounPage,
  ],
  imports: [
    IonicPageModule.forChild(ProperNounPage),
  ],
})
export class ProperNounPageModule {}
