import { Component, EventEmitter } from 'angular2/core';
import { MealItem } from './MealItem.model';
import { MealListComponent } from './meal-list.component';


@Component({
  selector: 'my-app',
  inputs: ['meals'],
  directives: [MealListComponent],
  template: `
    <div class="container">
      <h1>Calorie Counter</h1>
      <div class="container">
        <div class="well">
          <form class="">
            <h3>Log a new meal item:</h3>
            <label for="name">Name of food:</label>
            <input type="text" name="name" value="">
            <label for="calories">Calories:</label>
            <input type="number" name="calories">
            <label for="notes">Notes:</label>
            <input type="text" name="notes" value="">
            <label class="radio_label"><input type="radio" name="mealType" selected="selected">Breakfast</label>
            <label class="radio_label"><input type="radio" name="mealType">Lunch</label>
            <label class="radio_label"><input type="radio" name="mealType">Dinner</label>
            <label class="radio_label"><input type="radio" name="mealType">Snack</label>
            <button type="submit" name="newMealSubmit">Create New Item</button>
          </form>
        </div>

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
      new MealItem("French Fries", 350, "Delicious!", "Breakfast"),
      new MealItem("Dounuts", 750, "Extra Delicious!", "Breakfast"),
      new MealItem("Soup", 250, "Only had half a bowl.", "Lunch"),
      new MealItem("Coffee with sugar and cream", 250, "I like coffee.", "Lunch"),
      new MealItem("Yogurt", 150, "A snack", "Snack"),
      new MealItem("Steak", 550, "Delicious!", "Dinner"),
      new MealItem("Mashed Potatoes", 350, "Creamy!", "Dinner"),
      new MealItem("Cake", 250, "So Good!", "Dinner"),
      new MealItem("Cake", 250, "I had another slice", "Dinner")
    ];
  }
}
