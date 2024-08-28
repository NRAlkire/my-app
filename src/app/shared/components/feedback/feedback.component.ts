import { Component, OnInit } from '@angular/core';
import { AccountComponent } from '../../../account/account.component';
import { IonContent } from "@ionic/angular/standalone";

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [IonContent],
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent implements OnInit {

  constructor(
    private account: AccountComponent
  ) { }

  ngOnInit() {

  }

  closeFeedback() {
    this.account.closeFeedback();
  }

}
