import { CharactersServices } from "./../service/characters.services";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CharactersData implements Resolve<any> {
  constructor(private charactersServices: CharactersServices) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<any> {
    return this.charactersServices.listCharacters();
  }
}
