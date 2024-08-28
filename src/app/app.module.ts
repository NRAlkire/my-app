import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app.routes';
import { IonIcon, IonTabs } from '@ionic/angular/standalone';

import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';
import {RouterLink, RouterModule} from '@angular/router';

import { FeedbackComponent } from './shared/components/feedback/feedback.component';

@NgModule({
  imports: [
    AppRoutingModule,
    RouterLink,
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(),
    CommonModule,
    RouterModule,
    RouterLink,
    IonTabs,
    IonIcon,
    FeedbackComponent
  ],
  declarations: [
  ],
  bootstrap: []
})
export class AppModule {
}