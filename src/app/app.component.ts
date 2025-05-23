import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomepageBodyComponent } from './components/homepage-body/homepage-body.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { DashboardAboutComponent } from './components/dashboard-about/dashboard-about.component';
import { DashboardApiComponent } from './components/dashboard-api/dashboard-api.component';
import { DashboardLoginComponent } from './components/dashboard-login/dashboard-login.component';
import { DashboardSignupComponent } from './components/dashboard-signup/dashboard-signup.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    HeaderComponent, 
    HomepageBodyComponent, 
    LoginFormComponent, 
    SignupFormComponent,
    HttpClientModule,
    DashboardAboutComponent,
    DashboardApiComponent,
    DashboardLoginComponent,
    DashboardSignupComponent
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-api-capstone';
}


// export class AppComponent implements OnInit {
//   title = 'angular-api-capstone';
//   authService = inject(AuthService);

//   ngOnInit(): void {
//     this.authService.user$.subscribe(user => {
//       if(user) {
//         this.authService.currentUserSig.set({
//           email: user.email,
//         });
//       } else {
//         this.authService.currentUserSig.set(null);
//       }
//       console.log(this.authService.currentUserSig());
//     });
//   }

  

// }