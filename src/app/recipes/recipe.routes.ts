/**
 * Created by SergST on 15.03.2017.
 */

import {Routes} from "@angular/router";

import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {RecipeStartComponent} from "./recipe-start/recipe-start.component";

export const RECIPE_ROUTES: Routes =[
  {path: '', component: RecipeStartComponent},
  {path: ':id', component: RecipeDetailComponent},
  {path: ':id/edit', component: RecipeDetailComponent}
  ]