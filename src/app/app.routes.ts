/**
 * Created by SergST on 15.03.2017.
 */

import {Routes, RouterModule} from "@angular/router";
import {RECIPE_ROUTES} from "./recipes/recipe.routes";
import {RecipesComponent} from "./recipes/recipes.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";


const APP_ROUTES: Routes =[
  {path: '', redirectTo: '/recipes', pathMatch: "full"},
  {path: 'recipes', component: RecipesComponent, children: RECIPE_ROUTES},
  {path: 'shopping-list', component: ShoppingListComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);