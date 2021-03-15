import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';

/**
 * provideIn: root    
 *    -> indica a angular que este servicio esta siendo declarado en el root
 *    -> ya no es necesario declara el servicio en app.module.ts
 *    -> en teoria deberia poderse declarar en varios lugares a la ves
 */

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http:HttpClient) { 
    console.log('this is the spotify services');
    console.log(' root ');
  }

  getQuery(query:string){
    const url = `https://api.spotify.com/v1/${query}`
    const headers = new HttpHeaders({
      'Authorization':'Bearer BQDp_CYVWJ2WuU2T9uJY1lTnKKm8LCobaQpQkL3O7Szs-1-eUA_Gq7WZaqXXRj1DY6hCedoXyI5c1KGYBkI'
    })

    return this.http.get(url,{headers})
  }

  
  getReleases(){
    return this.getQuery('browse/new-releases')
      .pipe( map( data => data['albums'].items ))
  }

  getArtistas(termino:string){
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
      .pipe( map(data=>data['artists'].items))
  }

  getArtista(id:string){
    return this.getQuery(`artists/${id}`)
      
  }

  getTopTracks(id:string){
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
      .pipe(map(data=>data['tracks']))
  }
}
