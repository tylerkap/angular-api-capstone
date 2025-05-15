import { Routes } from '@angular/router';
import { SignupFormComponent } from './components/signup-form/signup-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginFormComponent
    },
    {
        path: 'login',
        component: LoginFormComponent
    },
    {
        path: 'register',
        component: SignupFormComponent
    },
    {
        path: 'about',
        component: AboutComponent
    }
];
