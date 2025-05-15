import { Routes } from '@angular/router';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AboutComponent } from './components/about/about.component';
import { DashboardLoginComponent } from './components/dashboard-login/dashboard-login.component';
import { DashboardSignupComponent } from './components/dashboard-signup/dashboard-signup.component';
import { DashboardAboutComponent } from './components/dashboard-about/dashboard-about.component';
import { DashboardApiComponent } from './components/dashboard-api/dashboard-api.component';

export const routes: Routes = [
    {
        path: '',
        component: DashboardLoginComponent
    },
    {
        path: 'login',
        component: DashboardLoginComponent
    },
    {
        path: 'register',
        component: DashboardSignupComponent
    },
    {
        path: 'about',
        component: DashboardAboutComponent
    },
    {
        path: 'homepage',
        component: DashboardApiComponent
    }
];
