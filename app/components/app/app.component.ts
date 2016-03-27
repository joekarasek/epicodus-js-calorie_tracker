import { Component } from 'angular2/core';
import { MealItem } from '../../models/MealItem.model';
import { MealListComponent } from '../meal-list/meal-list.component';
import { MealCreateComponent } from '../meal-create/meal-create.component';
import { NavBarComponent } from '../navbar/navbar.component';


@Component({
  selector: 'my-app',
  inputs: ['meals'],
  directives: [MealListComponent, MealCreateComponent, NavBarComponent],
  template: `
    <nav-bar
      (onNavBarClick)="setAppState($event)">
    </nav-bar>
    <div class="container">
      <div class="container">
        <div class="well well__start"
          *ngIf="appState === 'start'">
          <h1>Welcome to the Calorie Counter App</h1>
          <p>Use the buttons on the right side of the navbar to create, view, and edit a list of things you've eaten.</p>
          <p>This app was built using Angular2, a framework for building apps in Javascript.</p>
        </div>
        <create-meal
          (onSubmitCreateMeal)="addNewMeal($event)"
          *ngIf="appState === 'create'">
        </create-meal>
        <meal-list
          [meals]="meals"
          *ngIf="appState === 'view'">
        </meal-list>
      </div>
    </div>
  `
})

export class AppComponent {
  public meals: MealItem[];
  public appState: string = 'start';
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
  setAppState(newState: string) {
    this.appState = newState;
  }
}
