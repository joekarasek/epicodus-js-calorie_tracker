import { Component, EventEmitter } from 'angular2/core';

@Component({
  selector: 'nav-bar',
  outputs: ['onNavBarClick'],
  directives: [],
  template: `
      <nav class="navbar navbar-default">
      <div class="container-fluid">
          <p class="navbar-brand">
            Calorie Counter
          </p>
          <button type="button" class="btn btn-default navbar-btn navbar-right"
            (click)="clickNavBar('create')">
          Add Meal</button>
          <button type="button" class="btn btn-default navbar-btn navbar-right"
            (click)="clickNavBar('view')">
          View Meals</button>
      </div>
    </nav>
  `
})

export class NavBarComponent {
  public onNavBarClick: EventEmitter<string>;
  constructor(){
    this.onNavBarClick = new EventEmitter();
  }
  clickNavBar(appState){
    this.onNavBarClick.emit(appState);
  }
}
