import { Component, EventEmitter } from 'angular2/core';

@Component({
  selector: 'nav-bar',
  directives: [],
  template: `
      <nav class="navbar navbar-default">
      <div class="container-fluid">
          <p class="navbar-brand">
            Calorie Counter
          </p>
          <button type="button" class="btn btn-default navbar-btn navbar-right">Add Meal</button>
          <button type="button" class="btn btn-default navbar-btn navbar-right">View Meals</button>
      </div>
    </nav>
  `
})

export class NavBarComponent {
}
