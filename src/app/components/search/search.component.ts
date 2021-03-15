import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artists:any=[]
  loading:boolean=false

  constructor(private spotifyService:SpotifyService) { }

  ngOnInit(): void {
  }

  buscar(termino:string){
    console.log(termino);
    this.loading=true
    this.spotifyService.getArtistas(termino)
      .subscribe(data=>{
        
        this.artists=data
        console.log(this.artists);
        this.loading=false
      })
  }

}
