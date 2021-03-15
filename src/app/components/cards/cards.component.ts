import { Component, Input, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() items

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  verArtista(item:any){
    const idArtista = item.type==='artist'?item.id:item.artists[0].id
    console.log(idArtista);
    this.router.navigate(['/artist',idArtista])
  }

}
