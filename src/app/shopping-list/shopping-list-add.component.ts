import {Component, Input, OnChanges} from '@angular/core';
import {Ingredient} from "../shared/Ingredient";
import {ShoppingListService} from "./shopping-list.service";

@Component({
  selector: 'rb-shopping-list-add',
  templateUrl: './shopping-list-add.component.html'
})
export class ShoppingListAddComponent implements OnChanges {
  @Input() item: Ingredient;
  isAdd = true;

  constructor(private sls: ShoppingListService) { }

  ngOnChanges(changes) {
    if (changes.item.currentValue === null){
      this.isAdd = true;
      this.item = {name:'', amount: null}
    } else {
      this.isAdd = false
    }
  }

  onSubmit(val: Ingredient){
    let newItem = new Ingredient(val.name, val.amount);
    if (this.isAdd){
      this.item = newItem;
      this.sls.addItem(this.item)
    } else {
      this.sls.editItem(this.item, newItem)
    }
  }

  onDelete(){
    this.sls.deleteItem(this.item)
  }

}
