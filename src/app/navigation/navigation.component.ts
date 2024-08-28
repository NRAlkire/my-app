import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent, IonButton, IonNav, IonFooter } from "@ionic/angular/standalone";

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [IonFooter, IonNav, IonButton, IonContent, ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {

  constructor(
    private router: Router,
  ) {};

  loggedIn: boolean = false;

  goToHome() {
    console.log(this.router.navigate(['/home']));
    this.loggedIn = false;
    this.router.navigate(['/home']);
  }

  goToClients() {
    console.log(this.router.navigate(['/clients']));
    this.loggedIn = false;
    this.router.navigate(['/clients']);
  }

  // goToMessages() {
  //   console.log(this.router.navigate(['/messages']));
  //   this.router.navigate(['/messages']);
  // }

  goToAppointments() {
    console.log(this.router.navigate(['/appointments']));
    this.loggedIn = false;
    this.router.navigate(['/appointments']);
  }

  goToAccount() {
    console.log(this.router.navigate(['/account']));
    this.loggedIn = false;
    this.router.navigate(['/account']);
  }


}
