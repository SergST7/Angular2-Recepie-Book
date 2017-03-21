/**
 * Created by SergST on 21.03.2017.
 */

import {NgModule} from "@angular/core/src/metadata/ng_module";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";

//components
import {RecipesComponent} from "./recipes.component";
import {RecipeListComponent} from "./recipe-list/recipe-list.component";
import {RecipeItemComponent} from "./recipe-list/recipe-item.component";
import {RecipeDetailComponent} from "./recipe-detail/recipe-detail.component";
import {RecipeStartComponent} from "./recipe-start/recipe-start.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";

//routes
import {recipeRoutes} from "./recipes.routing";



@NgModule  ({
  declarations:[
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    RecipeStartComponent,
    RecipeEditComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    recipeRoutes
  ]
})
export class RecipesModule{}