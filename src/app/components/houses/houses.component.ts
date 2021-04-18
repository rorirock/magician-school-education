import { Component, OnInit, Output, } from '@angular/core';
import { AllCharactersService } from '../../services/all-characters.service';
import { environment } from '../../../environments/environment'; 
import { Members } from '../../models/members';
import { DataServicesService } from '../../services/data-services.service';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.sass']
})
export class HousesComponent implements OnInit {

  members= new Array<Members>();
  imgs = environment.imgs;
  houses = environment.houses;
  houseSelected: string;

  constructor( private _AllCharactersService: AllCharactersService, private _dataServices:DataServicesService) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  countCharacters = (house:string , data:any) =>{
    let characters = data.filter(character => character.house.toLowerCase() == house.toLowerCase());
    return characters.length.toString();
  }

  getCharacters = () =>{
    this._AllCharactersService.getCharacters();
    this._AllCharactersService.characters.subscribe((data)=>{
      this.houses.forEach(name => {
        this.members.push({ name:name, count: this.countCharacters(name,data)});
      });
    });
  }

  updateList = (house:string) =>{
    this._dataServices.houseSelected.emit(house);
  }

}