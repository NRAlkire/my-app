import { Component, OnInit } from '@angular/core';
import { IonButton, IonContent, IonCard, IonToggle, IonModal, IonApp, IonHeader, IonToolbar, IonButtons, IonTitle } from "@ionic/angular/standalone";import { FeedbackComponent } from '../shared/components/feedback/feedback.component';
;

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [IonTitle, IonButtons, IonToolbar, IonHeader, IonApp, IonModal, IonToggle, IonCard, IonContent, IonButton, FeedbackComponent],
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent implements OnInit {

notificationsUnderConstruction: boolean;
feedbackModal: boolean;

constructor() {

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

}
