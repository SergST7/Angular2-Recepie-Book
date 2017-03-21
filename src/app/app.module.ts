//modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {ShoppingListModule} from "./shopping-list/shopping-list.module";


import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import {HomeComponent} from "./home.component";

//services
import {ShoppingListService} from "./shopping-list/shopping-list.service";
import { DropdownDirective } from './dropdown.directive';
import {RecipeService} from "./recipes/recipe.service";

//routes
import {appRouting} from "./app.routing";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    appRouting,
    ShoppingListModule
  ],
  providers: [
    ShoppingListService,
    RecipeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
