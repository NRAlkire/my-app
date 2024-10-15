import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [IonicModule],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent implements OnInit {

notificationsUnderConstruction: boolean;
feedbackModal: boolean;

constructor(
  private app: AppComponent
) {

}

ngOnInit(): void {
  this.notificationsUnderConstruction = true;
  this.feedbackModal = false;
  console.log('ngOnInit completed');
}

openFeedback() {
  console.log('Testing');
this.feedbackModal = true;
console.log("open Feedback");
}

closeFeedback() {
  this.feedbackModal = false;
}

logout() {
  this.app.authorized = false;
}

}
