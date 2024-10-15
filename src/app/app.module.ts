import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app.routes';
import { IonIcon, IonTabs } from '@ionic/angular/standalone';
import { ReactiveFormsModule } from '@angular/forms';
import { MatError } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import { IonToast } from '@ionic/vue';

import {MatFormFieldModule} from '@angular/material/form-field';

import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';
import {RouterLink, RouterModule} from '@angular/router';

import { FeedbackComponent } from './shared/components/feedback/feedback.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';


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
    FeedbackComponent,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatError,
    MatInputModule,
    IonToast,
    NgbModule,
    NgbCarouselModule
  ],
  declarations: [
  ],
  bootstrap: []
})
export class AppModule {
}