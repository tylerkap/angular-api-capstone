import { Component } from '@angular/core';
import { DataService } from '../../service/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokedex',
  imports: [CommonModule],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.scss'
})
export class PokedexComponent {
  
  pokemons: any[] = [];
  
  
  constructor(private dataService: DataService) {

  }

  ngOnInit(): void {
    this.dataService.getPokemons()
      .subscribe((response: any) => {
        response.results.forEach((result: {name: string}) => {
          this.dataService.getMoreData(result.name)
          .subscribe((uniqeResponse: any) => {
            this.pokemons.push(uniqeResponse);
            console.log(this.pokemons);
          });
      });
    });
  }
}
