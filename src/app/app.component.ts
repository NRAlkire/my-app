import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatError, MatFormField } from '@angular/material/form-field';
import { RouterOutlet, Router } from '@angular/router';
import { IonFooter,
  IonContent,
  IonHeader,
  IonNav,
  IonToolbar,
  IonTitle,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonButton, IonCard } from "@ionic/angular/standalone";
import { MatInput } from '@angular/material/input';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IonCard, IonButton,
    IonLabel,
    IonIcon,
    IonTabButton,
    IonTabBar,
    IonTabs,
    IonTitle,
    IonToolbar,
    IonNav,
    IonHeader,
    IonContent,
    IonFooter,
    RouterOutlet,
    CommonModule,
    MatFormField,
    ReactiveFormsModule,
    MatError,
    MatInput,
  NgbCarouselModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  loginForm = new FormGroup({
  email: new FormControl('', [
    Validators.required,
    Validators.pattern('[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}')
  ]),
  password: new FormControl('', Validators.required)
  })

  // email = new FormControl('', [Validators.required, Validators.email]);
  // password = new FormControl('', Validators.required)

  // emailInput = document.getElementById('passwordInput');
  // passwordInput = document.getElementById('emailInput');

  authorized: boolean;
  validInput: boolean;

  role: string;

  windowWidth: string;
  showSplash = true;

  images: string[] = ["assets/text_loop/DragonHunterText.png", "assets/text_loop/BarazhadText.png", "assets/text_loop/EladrinText.png", "assets/text_loop/HighDrowicText.png", "assets/text_loop/IokharicText.png"];
  currentImageIndex: number = 0;
  slideshowElement: HTMLImageElement | null = document.getElementById("slideshow-image") as HTMLImageElement;


  constructor(
    private router: Router,
    private fb: FormBuilder,
    config: NgbCarouselConfig
  ) {
    config.showNavigationArrows = false;
    config.showNavigationIndicators = false;
  }

  ngOnInit(): void {
    this.authorized = false;
    this.validInput = false;
    // this.emailInput?.addEventListener('input', this.handleClick);
    setTimeout(() => {
      this.windowWidth = "-" + window.innerWidth + "px";

      setTimeout(() => {
        this.showSplash = !this.showSplash;
      }, 500);
    }, 3000);
    console.log(this.images[this.currentImageIndex]);

    this.startImageTransition();
  }
  startImageTransition() {
    console.log('into startImageTransition');
    setTimeout(this.changeImage, 3000);
  }

  async changeImage(): Promise<void> {
    console.log('into changeImage');
    if (this.slideshowElement) {
        this.slideshowElement.src = this.images[this.currentImageIndex];
        this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    }
}

  storytellerLogin() {
    this.authorized = true;
    this.role = 'Storyteller';
    this.router.navigateByUrl('/storytellerHome');
  }

  playerLogin() {
    this.authorized = true;
    this.role = 'Player';
    this.router.navigateByUrl('/playerHome');
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  getEmailErrorMessage() {
    console.log(this.email?.hasError('required'));
    console.log(this.email?.hasError('email'), 'email error');
    return this.email?.hasError('required') ? 'Email Required' :
        this.email?.hasError('email') ? 'Not a valid email' :
            '';
  }

   getPasswordErrorMessage() {
    return this.password?.hasError('required') ? 'Password Required' :
            '';
  }

  // getEmailErrorMessage() {
  //   this.validInput = false;
  //   return this.loginForm.hasError('required') ? 'Email Required' :
  //       this.email.hasError('email') ? 'Not a valid email' :
  //           '';
  // }

  // getPasswordErrorMessage() {
  //   this.validInput = false;
  //   return this.password.hasError('required') ? 'Password Required' :
  //           '';
  // }

  // handleClick() {
  //   if (this.email.hasError('required') || this.email.hasError('email') ||
  //   this.password.hasError('required')) {
  //     this.validInput = false;
  //   } else {
  //     this.validInput = true;
  //   }
  // }

  logout() {
    this.authorized = false;
    this.router.navigateByUrl('/home');
  }
}
