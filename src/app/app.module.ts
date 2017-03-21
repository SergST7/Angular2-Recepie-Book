//modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {ShoppingListModule} from "./shopping-list/shopping-list.module";
import {CoreModule} from "./core.module";

//components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';

//services
import {ShoppingListService} from "./shopping-list/shopping-list.service";
import {RecipeService} from "./recipes/recipe.service";

//routes
import {appRouting} from "./app.routing";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    appRouting,
    ShoppingListModule,
    CoreModule
  ],
  providers: [
    ShoppingListService,
    RecipeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
