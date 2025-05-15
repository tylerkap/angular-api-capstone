import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HomepageBodyComponent } from '../homepage-body/homepage-body.component';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-dashboard-about',
  imports: [
    HeaderComponent,
    HomepageBodyComponent,
    AboutComponent
  ],
  templateUrl: './dashboard-about.component.html',
  styleUrl: './dashboard-about.component.scss'
})
export class DashboardAboutComponent {

}
