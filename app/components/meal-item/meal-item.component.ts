import { Component, EventEmitter } from 'angular2/core';
import { MealItem } from './../../models/MealItem.model';

@Component({
    selector: 'meal-item',
    inputs: ['meal', 'selectedMeal'],
    template: `
    <li class="well">
        <div *ngIf="!editable || meal !== selectedMeal">
          <p><strong>{{ meal.name }}:</strong></p>
          <p *ngIf="meal === selectedMeal">Calories: {{ meal.calories }}</p>
          <p *ngIf="meal === selectedMeal">{{ meal.notes }}</p>
          <button (click)="showEditMeal()"
              *ngIf="meal === selectedMeal">
              Edit Meal
          </button>
        </div>
        <div *ngIf="editable && meal === selectedMeal">
          <p><strong>EDITING MODE</strong></p>
          <p *ngIf="meal === selectedMeal">Name: </p>
          <input [(ngModel)]="meal.name"/>
          <p *ngIf="meal === selectedMeal">Calories: </p>
          <input [(ngModel)]="meal.calories"/>
          <p *ngIf="meal === selectedMeal">Notes: </p>
          <input [(ngModel)]="meal.notes"/>
          <button (click)="showEditMeal()"
              *ngIf="meal === selectedMeal">
              Done
          </button>
        </div>
    </li>
    `
})

export class MealItemComponent {
  public editable: boolean = false;
  public meal: MealItem;
  public selectedMeal: MealItem;
  public onEditMeal: EventEmitter<MealItem>;
  constructor(){
    // this.onEditClick = new EventEmitter();
  }
  showEditMeal(){
    this.editable = !this.editable;
  }
}
