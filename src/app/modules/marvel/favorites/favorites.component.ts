import { like } from "./../../../core/interface/like.interface";
import { DbServices } from "./../../../core/service/db.services";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-favorites",
  templateUrl: "./favorites.component.html",
  styleUrls: ["./favorites.component.css"],
})
export class FavoritesComponent implements OnInit {
  favorite: Array<like> = [];
  notfavorite: Array<like> = [];
  constructor(private dbServices: DbServices) {
    dbServices.listLikes().then((res: Array<like>) => {
      this.favorite = res;
    });
    dbServices.listDidntLikes().then((res: Array<like>) => {
      this.notfavorite = res;
    });
  }

  ngOnInit() {}
}
