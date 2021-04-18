import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersHouseService {

  public characters= new Subject<any>();

  constructor(private _http: HttpClient) { }

   callCharacters = (house) => {
   return  this._http.get(environment.url_service + environment.services.characters_house + house);
  };

   getCharacters = (house) => {
    this.callCharacters(house).subscribe((data)=>{
        this.characters.next(data);
    });
    return this.characters.asObservable();
  }

}
