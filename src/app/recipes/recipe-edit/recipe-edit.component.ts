import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {
  FormArray,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";
import {Subscription} from "rxjs/Rx";

import {RecipeService} from "../recipe.service";
import {Recipe} from "../recipe";

@Component({
  selector: 'rb-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  recipeForm: FormGroup;
  private recipeId: number;
  private subscription: Subscription;
  private recipe: Recipe;
  private  isNew = true;

  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService,
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    // let isNew = true;
    this.subscription = this.route.params.subscribe(
      (param: any) => {
        if (param.hasOwnProperty('id')){
          this.isNew=false;
          this.recipeId = +param['id'];
          this.recipe = this.recipeService.getRecire(this.recipeId)
        } else {
          this.isNew = true;
          this.recipe = null;
        }
        this.initForm();
      }
    )
  }

  onSubmit(){
    let newRecipe = this.recipeForm.value;
    if (this.isNew){
      this.recipeService.addRecipe(newRecipe)
    } else {
      this.recipeService.editRecipe(this.recipe, newRecipe)
    }
    this.navigateBack();
  }

  onCansel(){
    this.navigateBack();
  }

  onRemoveItem(index: number) {
    (<FormArray>this.recipeForm.controls['ingredients']).removeAt(index)
  }

  onAddItem(name: string, amount: string){
    (<FormArray>this.recipeForm.controls['ingredients']).push(
      new FormGroup({
        name: new FormControl(name, Validators.required),
        amount: new FormControl(amount, [Validators.required, Validators.pattern('\\d+')])
      })
    )
  }

  private navigateBack(){
    this.router.navigate(['../'])
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  initForm(){
    let recipeName = '';
    let recipeImageUrl = '';
    let recipeContent = '';
    let recipeIngredients: FormArray = new FormArray([]);

    if (!this.isNew) {
      if (this.recipe.ingredients) {
        for (let i = 0; i < this.recipe.ingredients.length; i++){
          recipeIngredients.push(
            new FormGroup({
              name: new FormControl(this.recipe.ingredients[i].name, Validators.required),
              amount: new FormControl(this.recipe.ingredients[i].amount,
                [Validators.required, Validators.pattern('\\d+')])
            })
          )
        }
      }
      recipeName = this.recipe.name;
      recipeImageUrl = this.recipe.imagePath;
      recipeContent = this.recipe.description;
    }

    this.recipeForm = this.formBuilder.group({
      name: [recipeName, Validators.required],
      imagePath: [recipeImageUrl, Validators.required],
      description: [recipeContent, Validators.required],
      ingredients: recipeIngredients
    })
  }
}
