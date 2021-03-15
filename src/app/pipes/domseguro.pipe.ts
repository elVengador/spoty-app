import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer,SafeResourceUrl} from '@angular/platform-browser';

@Pipe({
  name: 'domseguro'
})
export class DomseguroPipe implements PipeTransform {

  constructor(private domSanitaizer:DomSanitizer){}

  transform(value: string): SafeResourceUrl {
    return this.domSanitaizer.bypassSecurityTrustResourceUrl("https://open.spotify.com/embed/album/" + value)
  }

}
