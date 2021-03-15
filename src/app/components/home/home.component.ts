import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  nuevasCanciones:any[]=[]
  loading:boolean=false
  isError:boolean=false
  mensajeError:string=''

  constructor(private spotifyService:SpotifyService) {
  
    this.loading=true
    this.spotifyService.getReleases()
      .subscribe((data:any)=>{
        this.nuevasCanciones=data
        this.loading=false
      },(error)=>{
        console.log(error);
        this.loading=false
        this.isError = true
        this.mensajeError = error.error.error.message
        console.log(this.mensajeError);
      })
      
  }

}
