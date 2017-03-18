import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Rx";

import {RecipeService} from "../recipe.service";

@Component({
  selector: 'rb-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  private recipeId: number;
  private subscription: Subscription;

  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService) { }

  ngOnInit() {
    let isNew = true;
    this.subscription = this.route.params.subscribe(
      (param: any) => {
        if (param.hasOwnProperty('id')){
          isNew=false;
          this.recipeId = +param['id']
        } else {
          isNew = true
        }
      }
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
