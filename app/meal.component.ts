import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
    <div class="display">
      <h2>Meal: {{ meal.name }}</h2>
      <h3>Calories: {{ meal.calories }}</h3>
      <h3>Details: {{ meal.details }}</h3>
    </div>
  `
})

export class MealComponent {
  public meal: Meal;
}
