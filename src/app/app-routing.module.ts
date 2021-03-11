import { FavoritesComponent } from "./modules/marvel/favorites/favorites.component";
import { CharactersComponent } from "./modules/marvel/characters/characters.component";
import { HomeComponent } from "./modules/home/home.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CharactersData } from "./core/resolver/characters-data.resolver";

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "characters",
    component: CharactersComponent,
    resolve: { characters: CharactersData },
  },
  { path: "favorites", component: FavoritesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
