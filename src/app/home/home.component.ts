import { Component } from '@angular/core';
import { IonButton, IonContent } from "@ionic/angular/standalone";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IonContent, IonButton, ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
checkLogs() {
  console.log('Testing');
throw new Error('Method not implemented.');
}

}
