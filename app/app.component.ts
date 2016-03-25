import { Component, EventEmitter } from 'angular2/core';
import { MealItem } from './MealItem.model';

@Component({
  selector: 'my-app',
  inputs: ['meals'],
  template: `
    <div class="container">
      <h1>Calorie Counter</h1>
      <div class="container">
        <p>Hello world!</p>
        <ul>
          <li *ngFor="#meal of meals">{{ meal.name }}</li>
        </ul>
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
