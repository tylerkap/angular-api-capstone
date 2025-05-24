import { Component } from '@angular/core';
import { DataService } from '../../service/data.service';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pokedex',
  imports: [CommonModule, NgxPaginationModule, FormsModule],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.scss'
})
export class PokedexComponent {
  
  pokemons: any[] = [];
  page = 0;
  totalPokemons?: number;
  searchText: any;
  
  
  constructor(private dataService: DataService) {

  }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    this.dataService.getPokemons(10, this.page + 0)
      .subscribe((response: any) => {
        this.totalPokemons = response.count;
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
