/**
 * Created by SergST on 21.03.2017.
 */

import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

//components
import {ShoppingListAddComponent} from "./shopping-list-add.component";
import {ShoppingListComponent} from "./shopping-list.component";


@NgModule({
  declarations:[
    ShoppingListComponent,
    ShoppingListAddComponent,
  ],
  imports: [
    FormsModule,
    CommonModule
  ]
})
export class ShoppingListModule{}

