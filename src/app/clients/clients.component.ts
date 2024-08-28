import { Component, OnInit } from '@angular/core';
import { BackgroundImage, BackgroundImages } from '../shared/constants/backgroundImage';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss'
})
export class ClientsComponent implements OnInit {

  constructor(
  ) {}

  value: number;
  backgroundImage: BackgroundImage;

  ngOnInit(): void {
    this.value = this.getRandomInt(14);
    console.log(this.backgroundImage);
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

}
