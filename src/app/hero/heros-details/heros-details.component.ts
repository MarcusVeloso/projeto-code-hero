import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-heros-details',
  templateUrl: './heros-details.component.html',
  styleUrls: ['./heros-details.component.css']
})
export class HerosDetailsComponent implements OnInit {

  hero:any;

  constructor(private heroService: HeroService,
              private route: ActivatedRoute,) { }

  ngOnInit(): void {

    this.heroService.obterPorId(this.route.snapshot.url[1].path)
    .subscribe(hero => this.hero = hero);
    
  }

}
