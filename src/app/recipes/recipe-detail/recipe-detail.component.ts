import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from "../recipe";
import {ShoppingListService} from "../../shopping-list/shopping-list.service";
import {Router, ActivatedRoute} from "@angular/router";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe: Recipe;

  recipeId: number;

  constructor(private sls: ShoppingListService,
              private router: Router,
              private  route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (param: any) => {
        this.recipeId = param['id'];
        console.log(this.recipeId)
      });

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
