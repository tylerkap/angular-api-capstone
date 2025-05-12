import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { HomepageBodyComponent } from './components/homepage-body/homepage-body.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, HomepageBodyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-api-capstone';
}
