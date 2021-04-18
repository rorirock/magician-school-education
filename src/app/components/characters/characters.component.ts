import { Component, Input, OnInit, } from '@angular/core';
import { CharactersHouseService } from '../../services/characters-house.service';
import { DataServicesService } from '../../services/data-services.service';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.sass']
})
export class CharactersComponent implements OnInit {

   charactersList = [];
   charactersLists = [];
   nameFilter: string = '';
   sorting: string = 'name';
  
  constructor(private _CharactersHouseService:CharactersHouseService,private _dataServices:DataServicesService) { }

  ngOnInit(): void { 
    this._dataServices.houseSelected.subscribe((data:string)=>{
      this.getCharacterHouses(data);
    }) 
  }

  getCharacterHouses = (house:string)=>{
    this._CharactersHouseService.getCharacters(house);
    this._CharactersHouseService.characters.subscribe((data)=>{
      this.charactersList = data;
      this.charactersLists = this.charactersList;
    });
  }

  searchCharacter(){
    this.charactersLists = this.charactersList.filter((character)=> character.name.toLowerCase().indexOf(this.nameFilter.toLowerCase()) >= 0);
    this.sortingCharacter();
  }

  sortingCharacter(){
    console.log('sorting',this.sorting);
    if(this.sorting == 'name'){
      this.charactersLists.sort((a:any,b:any)=>{
        return (a.name > b.name) ? 1 :
               (a.name < b.name) ? -1 : 0;
      });
    }else if(this.sorting == 'lname'){
      this.charactersLists.sort((a:any,b:any)=>{
        console.log(a , b);
        let la = a.name.split(' '),
            lb = b.name.split(' ');
          return (la[1] > lb[1]) ?  1 :
                 (la[1] < lb[1]) ? -1 : 0;
      });
    }
  }
}