import { environment } from "./../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class CharactersServices {
  private apiConfig;
  constructor(private http: HttpClient) {
    this.apiConfig = environment;
  }

  listCharacters() {
    return this.http
      .get(
        `http://gateway.marvel.com/v1/public/characters?limit=15&ts=${this.apiConfig.ts}&apikey=${this.apiConfig.apikey}&hash=${this.apiConfig.hash}`
      )
      .toPromise();
  }
  listCharactersWithParams(params) {
    return this.http
      .get(
        `http://gateway.marvel.com/v1/public/characters?limit=15${params}&ts=${this.apiConfig.ts}&apikey=${this.apiConfig.apikey}&hash=${this.apiConfig.hash}`
      )
      .toPromise();
  }
}
