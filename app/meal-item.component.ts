import { Component } from 'angular2/core';
import { MealItem } from './MealItem.model';

@Component({
    selector: 'meal-item',
    inputs: ['meal', 'selectedMeal'],
    template: `
    <li class="well">
        <p><strong>{{ meal.name }}:</strong></p>
        <p *ngIf="meal === selectedMeal">{{ meal.calories }} calories</p>
        <p *ngIf="meal === selectedMeal">{{ meal.notes }}</p>
    </li>
    `
})

export class MealItemComponent {
  public meal: MealItem;
}
