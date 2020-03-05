import { Recipe, } from './recipe.model';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Injectable } from '@angular/core';

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe('Schnitzel', 
        'This is simpy a test', 
        'https://www.maxpremiumburgers.pl/contentassets/afbe9c5a892c41eab3b70841e9e342bd/product_cheeseburger.jpg', 
        [new Ingredient('Meat' , 1),
         new Ingredient('French Fries', 20)]),
        new Recipe('Burger', 
        'Anoother test', 
        'https://www.maxpremiumburgers.pl/contentassets/afbe9c5a892c41eab3b70841e9e342bd/product_cheeseburger.jpg', 
        [new Ingredient('Buns' , 2),
        new Ingredient('Meat', 1)])
      ];

      getRecipes() {
          return this.recipes.slice();
      }

      constructor(private slService: ShoppingListService) {}

      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
      }

      getRecipe(id: number) {
        return this.recipes[id];
      }
}