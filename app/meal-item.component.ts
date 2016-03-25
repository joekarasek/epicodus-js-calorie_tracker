import { Component } from 'angular2/core';
import { MealItem } from './MealItem.model';

@Component({
    selector: 'meal-item',
    inputs: ['meal'],
    template: `
    <li class="well">
        <p><strong>{{ meal.name }}:</strong> {{ meal.calories }} calories</p>
        <p>{{ meal.mealType }}
        <p>{{ meal.notes }}</p>
    </li>
    `
})

export class MealItemComponent {
  public meal: MealItem;
}
