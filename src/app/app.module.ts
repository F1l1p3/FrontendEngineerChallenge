import { DbServices } from "./core/service/db.services";
import { CharactersServices } from "./core/service/characters.services";
import { HomeComponent } from "./modules/home/home.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CharactersComponent } from "./modules/marvel/characters/characters.component";
import { OrderByComponent } from "./modules/marvel/components/order-by/order-by.component";
import { ReactiveFormsModule, FormsModule, FormBuilder } from "@angular/forms";
import { FavoritesComponent } from "./modules/marvel/favorites/favorites.component";
import { ListGroupComponent } from "./modules/marvel/components/list-group/list-group.component";
import { AccordionComponent } from "./modules/marvel/components/accordion/accordion.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharactersComponent,
    OrderByComponent,
    FavoritesComponent,
    ListGroupComponent,
    AccordionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [OrderByComponent],
  providers: [HttpClientModule, CharactersServices, DbServices],
  bootstrap: [AppComponent],
})
export class AppModule {}
