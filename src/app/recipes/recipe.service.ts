import {Injectable, EventEmitter} from '@angular/core';
import {Recipe} from "./recipe";
import {Ingredient} from "../shared/Ingredient";
import {Headers, Http, Response} from "@angular/http";
import 'rxjs/add/operator/map';


@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Schnitzel', 'Very tasty',
      'http://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-7_edited.jpg',
      [
        new Ingredient('French Fries', 2),
        new Ingredient('Pork Meat', 1),
        new Ingredient('Lemon', 1)
      ]),
    new Recipe('Summer Salad', 'Okayish', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg',
      [
        new Ingredient('Tomatoes', 2),
        new Ingredient('Baby cucumbers', 3),
        new Ingredient('Stems of green onion', 1)
    ]),
    new Recipe('Dress', 'Nice black dress', 'https://s-media-cache-ak0.pinimg.com/736x/ac/ba/d9/acbad9b0d9aeb233da529f5444b03281.jpg', [])
  ];

  url = 'https://recipe-book-90cad.firebaseio.com/';

  dataFetched = new EventEmitter<Recipe[]>();

  constructor(private http: Http) { }

  getData(){
    return this.recipes
  }

  getRecire(id: number){
    return this.recipes[id]
  }

  deleteRecipe(recipe: Recipe){
    let index = this.recipes.indexOf(recipe);
    this.recipes.splice(index, 1)
  }

  addRecipe(recipe: Recipe){
    this.recipes.push(recipe)
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe){
    let oldIndex = this.recipes.indexOf(oldRecipe);
    this.recipes[oldIndex] = newRecipe
  }

  storeData(){
    const body = JSON.stringify(this.recipes);
    const headers = new Headers({
      "Content-Type": "application/json"
    });
    return this.http.put(this.url+'recipe.json', body, {headers: headers} )
  }

  fetchData(){
    return this.http.get(this.url+'recipe.json')
      .map((response: Response) => response.json())
      .subscribe(
        (data: Recipe[]) => {
          console.log(data);
          this.recipes = data;
          this.dataFetched.emit(data)
        })
  }

}
