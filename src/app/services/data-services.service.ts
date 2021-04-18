import { Injectable, Output,EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServicesService {

 @Output() houseSelected: EventEmitter<string> = new EventEmitter();
  

  constructor() {  }
}