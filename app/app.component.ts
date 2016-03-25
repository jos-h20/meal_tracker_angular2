import { Component, EventEmitter } from 'angular2/core';
import { MealListComponent } from './meal-list.component';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
  <div class="jumbotron">
    <h1 class="header">Meal Tracker</h1>
  </div>

  <div class="container">
  <div>
    <h2>Meals:</h2>
    <meal-list
    [mealList]="meals">
    </meal-list>
  </div>
  </div>
  `
})

export class AppComponent {
  public meals: Meal[];
  constructor() {
    this.meals = [
      new Meal("Burrito", 370, "Lean Meat, not too much cheese", 0),
      new Meal("Hamburger", 340, "No cheese", 1),
      new Meal("Wrap", 250, "Mostly salad", 2)
    ];
  }
}
