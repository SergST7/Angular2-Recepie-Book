/**
 * Created by SergST on 15.03.2017.
 */

import {Routes} from "@angular/router";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";

export const RECIPE_ROUTES: Routes =[
  {path: ':id', component: RecipeDetailComponent},
  {path: ':id/edit', component: RecipeDetailComponent}
  ]