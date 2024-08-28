import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router } from '@angular/router';
import { NavigationComponent } from "./navigation/navigation.component";
import { IonFooter, IonContent, IonHeader, IonNav, IonToolbar, IonTitle, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IonButton, IonLabel, IonIcon, IonTabButton, IonTabBar, IonTabs, IonTitle, IonToolbar, IonNav, IonHeader, IonContent, IonFooter, RouterOutlet, NavigationComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  constructor(
    private router: Router
  ) {}

  title = 'my-app';
  authorized: boolean;

  ngOnInit(): void {
    this.authorized = false;
  }

  login() {
    this.authorized = true;
  }
}
