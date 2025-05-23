import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { PokedexComponent } from '../pokedex/pokedex.component';

@Component({
  selector: 'app-dashboard-api',
  imports: [NavbarComponent, PokedexComponent],
  templateUrl: './dashboard-api.component.html',
  styleUrl: './dashboard-api.component.scss'
})
export class DashboardApiComponent {

}
