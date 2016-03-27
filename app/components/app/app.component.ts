import { Component } from 'angular2/core';
import { MealItem } from '../../models/MealItem.model';
import { MealListComponent } from '../meal-list/meal-list.component';
import { MealCreateComponent } from '../meal-create/meal-create.component';
import { NavBarComponent } from '../navbar/navbar.component';


@Component({
  selector: 'my-app',
  inputs: ['meals'],
  directives: [MealListComponent, MealCreateComponent, NavBarComponent],
  pipes: [],
  template: `
    <nav-bar>
    </nav-bar>
    <div class="container">
      <h1>Calorie Counter</h1>
      <div class="container">

        <create-meal
          (onSubmitCreateMeal)="addNewMeal($event)">
        </create-meal>
        <meal-list
          [meals]="meals">
        </meal-list>
      </div>
    </div>
  `
})

export class AppComponent {
  public meals: MealItem[];
  constructor(){
    this.meals = [
      new MealItem("French Fries", 350, "Delicious!"),
      new MealItem("Dounuts", 750, "Extra Delicious!"),
      new MealItem("Soup", 250, "Only had half a bowl."),
      new MealItem("Coffee with sugar and cream", 250, "I like coffee."),
      new MealItem("Yogurt", 150, "A snack"),
      new MealItem("Steak", 550, "Delicious!"),
      new MealItem("Mashed Potatoes", 350, "Creamy!"),
      new MealItem("Cake", 250, "So Good!"),
      new MealItem("Cake", 250, "I had another slice")
    ];
  }
  addNewMeal(newMeal: MealItem) {
    this.meals.unshift(newMeal);
  }
}
