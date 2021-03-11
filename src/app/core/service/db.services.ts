import { like } from "./../interface/like.interface";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class DbServices {
  private apiConfig = "http://localhost:3000";
  constructor(private http: HttpClient) {}

  listLikes() {
    return this.http.get(this.apiConfig + "/likes").toPromise();
  }
  listDidntLikes() {
    return this.http.get(this.apiConfig + "/didntlikes").toPromise();
  }

  insertLike(info: like) {
    this.http.post(this.apiConfig + "/likes", info).toPromise();
  }
  insertDidntLike(info: like) {
    this.http.post(this.apiConfig + "/didntlikes", info).toPromise();
  }

  deleteLike(id) {
    this.http.delete(this.apiConfig + "/likes/" + id).toPromise();
  }
  deleteDidntLike(id) {
    this.http.delete(this.apiConfig + "/didntlikes/" + id).toPromise();
  }
}
