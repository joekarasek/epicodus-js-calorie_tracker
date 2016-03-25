import { Component, EventEmitter } from 'angular2/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1>Calorie Counter</h1>
      <div class="container">
        <p>Hello world!</p>
      </div>
    </div>
  `
})

export class AppComponent {
  constructor(){
    // Create initial "dummy" set of meals to enter here
  }
}
