import { DbServices } from "./../../../core/service/db.services";
import { like } from "./../../../core/interface/like.interface";
import { imageBtn } from "./../../../core/util/selects.constants";
import { CharactersServices } from "./../../../core/service/characters.services";
import { Component } from "@angular/core";
import { FormGroup, FormBuilder, FormsModule } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-characters",
  templateUrl: "./characters.component.html",
  styleUrls: ["./characters.component.css"],
})
export class CharactersComponent {
  profileResults: any;
  start = 0;
  listComics = null;
  listSeries = null;
  offset: string = "";
  orderBy: string = "";
  nameStartsWith: string = "";
  listBtns = imageBtn;
  listLikes: Array<any> = [];
  listIdLikes: Array<any> = [];
  listDidntLikes: Array<any> = [];
  listIdDidntLikes: Array<any> = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private charactersServices: CharactersServices,
    private dbServices: DbServices,
    public fb: FormBuilder
  ) {
    this.listResults(this.activatedRoute.snapshot.data.characters);
    this.dbServices.listLikes().then((res: Array<any>) => {
      this.listLikes = res;
      this.listIdLikes = res.map((a) => a.id);
    });
    this.dbServices.listDidntLikes().then((res: Array<any>) => {
      this.listDidntLikes = res;
      this.listIdDidntLikes = res.map((a) => a.id);
    });
  }
  nameForm = this.fb.group({
    name: [""],
  });

  listResults(characters) {
    this.profileResults = characters.data.results;
  }

  listForBtn(vl) {
    if (vl + this.start >= 0) {
      let start = vl + this.start;
      this.offset = "&offset=" + start;
      let params = "" + this.offset + this.orderBy + this.nameStartsWith;
      this.charactersServices.listCharactersWithParams(params).then((res) => {
        if (res["data"]["results"].length != 0) {
          this.profileResults = res["data"]["results"];
          this.start = vl + this.start;
        }
      });
    }
  }
  listOrderBy(order) {
    this.orderBy = order != "" ? "&orderBy=" + order : order;
    let params = "" + this.offset + this.orderBy + this.nameStartsWith;
    this.charactersServices
      .listCharactersWithParams(params)
      .then((res) => (this.profileResults = res["data"]["results"]));
  }
  listByNameStartWith() {
    this.start = 0;
    this.offset = "&offset=0";
    this.nameStartsWith =
      this.nameForm.controls.name.value != ""
        ? "&nameStartsWith=" + this.nameForm.controls.name.value
        : this.nameForm.controls.name.value;
    let params = "" + this.offset + this.orderBy + this.nameStartsWith;
    this.charactersServices
      .listCharactersWithParams(params)
      .then((res) => (this.profileResults = res["data"]["results"]));
  }

  liked(id) {
    if (this.listIdLikes.indexOf(id) == -1) {
      this.listIdLikes.push(id);
      this.selectAndInsertLike(id);
    } else {
      this.listIdLikes.splice(this.listIdLikes.indexOf(id), 1);
      this.dbServices.deleteLike(id);
    }
  }
  didntLiked(id) {
    if (this.listIdDidntLikes.indexOf(id) == -1) {
      this.listIdDidntLikes.push(id);
      this.selectAndInsertDidntLike(id);
    } else {
      this.listIdDidntLikes.splice(this.listIdDidntLikes.indexOf(id), 1);
      this.dbServices.deleteDidntLike(id);
    }
  }

  selectAndInsertLike(id) {
    let obj: like = {
      id: id,
      info: this.profileResults.find((a) => a.id == id),
    };
    this.dbServices.insertLike(obj);
  }
  selectAndInsertDidntLike(id) {
    let obj: like = {
      id: id,
      info: this.profileResults.find((a) => a.id == id),
    };
    this.dbServices.insertDidntLike(obj);
  }
}
