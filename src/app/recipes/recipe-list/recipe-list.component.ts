import { Component, OnInit, EventEmitter } from '@angular/core';
import {Recipe} from "../recipe";
import {Output} from "@angular/core/src/metadata/directives";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: 'recipe-list.component.html',
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  recipe = new Recipe('Dress', 'Nice black dress', 'https://s-media-cache-ak0.pinimg.com/736x/ac/ba/d9/acbad9b0d9aeb233da529f5444b03281.jpg');
  @Output() recipeSelectedItem = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }

  onSelectRecipe(recipe: Recipe){
    this.recipeSelectedItem.emit(recipe)
  }

}
