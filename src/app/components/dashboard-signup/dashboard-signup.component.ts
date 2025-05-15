import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HomepageBodyComponent } from '../homepage-body/homepage-body.component';
import { SignupFormComponent } from '../signup-form/signup-form.component';



@Component({
  selector: 'app-dashboard-signup',
  imports: [
    HeaderComponent,
    HomepageBodyComponent,
    SignupFormComponent
  ],
  templateUrl: './dashboard-signup.component.html',
  styleUrl: './dashboard-signup.component.scss'
})
export class DashboardSignupComponent {

}
