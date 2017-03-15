import { Component, OnInit, EventEmitter } from '@angular/core';
import {Recipe} from "../recipe";
import {Output} from "@angular/core/src/metadata/directives";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: 'recipe-list.component.html',
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  // @Output() recipeSelectedItem = new EventEmitter<Recipe>();
  constructor( private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getData()
  }

  // onSelectRecipe(recipe: Recipe){
  //   this.recipeSelectedItem.emit(recipe)
  // }

}
