import { Component, OnInit } from '@angular/core';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-heros-list',
  templateUrl: './heros-list.component.html',
  styleUrls: ['./heros-list.component.css']
})
export class HerosListComponent implements OnInit {

  page: number = 1;

  public heroList: any = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.obterTodos()
      .subscribe(heroLista => this.heroList = heroLista);
  }

  pesquisarPersonagem() {

  }
}