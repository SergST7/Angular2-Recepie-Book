import {Component, OnInit, Input, OnDestroy} from '@angular/core';
import { Recipe } from "../recipe";
import {ShoppingListService} from "../../shopping-list/shopping-list.service";
import {Router, ActivatedRoute} from "@angular/router";
import {RecipeService} from "../recipe.service";
import {Subscription} from "rxjs/Rx";

@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit, OnDestroy{
  selectedRecipe: Recipe;

  private recipeId: number;
  private subscription: Subscription;

  constructor(private sls: ShoppingListService,
              private router: Router,
              private recipeService: RecipeService,
              private  route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (param: any) => {
        this.recipeId = param['id'];
        // console.log(this.recipeId);
        this.selectedRecipe = this.recipeService.getRecire(this.recipeId)
      });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
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
