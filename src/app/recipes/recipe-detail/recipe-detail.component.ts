import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from "../recipe";
import {ShoppingListService} from "../../shopping-list/shopping-list.service";
import {Router} from "@angular/router";

@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe: Recipe;

  recipeId:number = 1;

  constructor(private sls: ShoppingListService, private router: Router) { }

  ngOnInit() {
  }

  onAddToList(){
    this.sls.addItems(this.selectedRecipe.ingredients)
  }

  onEdit(){
    this.router.navigate(['/recipes', this.recipeId, 'edit'])
  }

  onDelete(){
    this.router.navigate(['/recipes'])
  }

}
