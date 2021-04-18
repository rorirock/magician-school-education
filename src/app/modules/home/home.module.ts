import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FooterComponent } from './../../components/footer/footer.component';
import { HousesComponent } from './../../components/houses/houses.component';
import { CharactersComponent } from './../../components/characters/characters.component';
import { FormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [
    HomeComponent,
    FooterComponent,
    HousesComponent,
    CharactersComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    FormsModule
    
  ]
})
export class HomeModule { }
