import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent  {

  artista:any = {}
  topTracks:any = {}
  loadingArtista:boolean = false
  loadingTopTrack:boolean = false

  constructor(private router:ActivatedRoute,
              private spotifyService:SpotifyService) { 
    this.router.params.subscribe(params => {
      const id = params['id']
      this.getArtista(id)
      this.getTopTracks(id)
    })
    
  }

  getArtista(id:string){
    this.loadingArtista = true
    this.spotifyService.getArtista(id)
      .subscribe(artista => {
        this.artista = artista
        this.loadingArtista = false
      })
  }

  getTopTracks(id:string){
    this.loadingTopTrack = true
    this.spotifyService.getTopTracks(id)
      .subscribe(topTracks => {
        this.topTracks =  topTracks
        console.log(topTracks);
        this.loadingTopTrack = false
      })
  }

}
