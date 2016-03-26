import { Component, EventEmitter } from 'angular2/core';
import { MealItem } from './../../models/MealItem.model';

@Component({
  selector: 'create-meal',
  outputs: ['onSubmitCreateMeal'],
  template: `
  <div class="well">
    <form class="">
      <h3>Log a new meal item:</h3>
      <label for="name">Name of food:</label>
      <input type="text" name="name" value="" #newName>
      <label for="calories">Calories:</label>
      <input type="number" name="calories" #newCalories>
      <label for="notes">Notes:</label>
      <input type="text" name="notes" value="" #newNotes>
      <button (click)="addMeal(newName, newCalories, newNotes)" class="btn-success btn-lg add-button">Add</button>
    </form>
  </div>
  `
})

export class MealCreateComponent {
  public onSubmitCreateMeal: EventEmitter<MealItem>;
  constructor(){
    this.onSubmitCreateMeal = new EventEmitter();
  }
  addMeal(mealName: HTMLInputElement, mealCalories: HTMLInputElement, mealNotes: HTMLInputElement) {
    if (mealName.value === "" || mealCalories.value === "" || mealNotes.value === "") {
      alert("Please fill in all fields!");
    } else {
      var newMeal: MealItem = new MealItem(mealName.value, parseInt(mealCalories.value), mealNotes.value);
      // Clear fields after submit
      mealName.value = "";
      mealCalories.value = "";
      mealNotes.value = "";
      // Emit new meal to app
      this.onSubmitCreateMeal.emit(newMeal);
    }
  }
}
