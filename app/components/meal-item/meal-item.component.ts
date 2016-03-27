import { Component, EventEmitter } from 'angular2/core';
import { MealItem } from './../../models/MealItem.model';

@Component({
    selector: 'meal-item',
    inputs: ['meal', 'selectedMeal'],
    template: `
    <li class="well">
        <div *ngIf="!editable">
          <button (click)="showEditMeal()">Edit Meal</button>
          <p><strong>{{ meal.name }}:</strong></p>
          <p *ngIf="meal === selectedMeal">{{ meal.calories }} calories</p>
          <p *ngIf="meal === selectedMeal">{{ meal.notes }}</p>
        </div>
        <div *ngIf="editable">
          <button (click)="showEditMeal()">Cancel</button>
          <p><strong>EDITING MODE:</strong></p>
          <p *ngIf="meal === selectedMeal">{{ meal.calories }} calories</p>
          <p *ngIf="meal === selectedMeal">{{ meal.notes }}</p>
        </div>
    </li>
    `
})

export class MealItemComponent {
  public editable: boolean = false;
  public meal: MealItem;
  public onEditMeal: EventEmitter<MealItem>;
  constructor(){
    // this.onEditClick = new EventEmitter();
  }
  showEditMeal(){
    this.editable = !this.editable;
  }
}
