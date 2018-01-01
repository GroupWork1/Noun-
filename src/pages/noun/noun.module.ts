import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NounPage } from './noun';

@NgModule({
  declarations: [
    NounPage,
  ],
  imports: [
    IonicPageModule.forChild(NounPage),
  ],
})
export class NounPageModule {}
