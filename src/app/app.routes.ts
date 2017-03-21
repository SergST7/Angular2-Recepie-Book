/**
 * Created by SergST on 15.03.2017.
 */

import {Routes, RouterModule} from "@angular/router";
import {RECIPE_ROUTES} from "./recipes/recipe.routes";
import {RecipesComponent} from "./recipes/recipes.component";
import {ShoppingListComponent} from "./shopping-list/shopping-list.component";
import {HomeComponent} from "./home.component";


const APP_ROUTES: Routes =[
  {path: '', redirectTo: '/home', pathMatch: "full"},
  {path: 'home', component: HomeComponent},
  {path: 'recipes', component: RecipesComponent, children: RECIPE_ROUTES},
  {path: 'shopping-list', component: ShoppingListComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);