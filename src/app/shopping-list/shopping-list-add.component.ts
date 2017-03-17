import { Component, OnInit } from '@angular/core';
import {Ingredient} from "../shared/Ingredient";
import {ShoppingListService} from "./shopping-list.service";

@Component({
  selector: 'rb-shopping-list-add',
  templateUrl: './shopping-list-add.component.html'
})
export class ShoppingListAddComponent implements OnInit {
  item: Ingredient;
  isAdd = true;

  constructor(private sls: ShoppingListService) { }

  ngOnInit() {
  }

  onSubmit(val: Ingredient){
    if (this.isAdd){
      this.item = new Ingredient(val.name, val.amount);
      this.sls.addItem(this.item)
    } else {
      //edit
    }

  }

}
