import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllCharactersService {

  public characters = new Subject<any>();

  constructor(private _http: HttpClient) { }

  callCharacters = (): Observable<any> => {
   return  this._http.get(environment.url_service + environment.services.characters);
  };

  getCharacters = ():any => {
    this.callCharacters().subscribe((data)=>{
        this.characters.next(data);
    });
    return this.characters.asObservable();
  }

}