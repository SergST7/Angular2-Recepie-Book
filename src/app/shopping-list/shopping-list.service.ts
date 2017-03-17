import { Injectable } from '@angular/core';
import {Ingredient} from "../shared/Ingredient";

@Injectable()
export class ShoppingListService {
  private items: Ingredient[] = [];

  constructor() { };

  getItems(){
    return this.items
  }

  addItems(items: Ingredient[]){
    Array.prototype.push.apply(this.items, items)
  }

  addItem(item: Ingredient){
    this.items.push(item)
  }

  editItem(oldItem: Ingredient, newItem:Ingredient){
    let index = this.items.indexOf(oldItem);
    this.items[index] = newItem
  }
}
