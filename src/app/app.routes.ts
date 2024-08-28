import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ClientsComponent } from './clients/clients.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { AccountComponent } from './account/account.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'clients', component: ClientsComponent},
    {path: 'appointments', component: AppointmentsComponent},
    {path: 'account', component: AccountComponent},
];

@NgModule({
    imports: [
      RouterModule.forRoot(
        routes,
        {
          enableTracing: false, // <-- debugging purposes only
        }
      )
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule { }