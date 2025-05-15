import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HomepageBodyComponent } from '../homepage-body/homepage-body.component';
import { LoginFormComponent } from '../login-form/login-form.component';

@Component({
  selector: 'app-dashboard-login',
  imports: [
    HeaderComponent,
    HomepageBodyComponent,
    LoginFormComponent
  ],
  templateUrl: './dashboard-login.component.html',
  styleUrl: './dashboard-login.component.scss'
})
export class DashboardLoginComponent {

}
