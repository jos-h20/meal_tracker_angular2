import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealListComponent } from './meal-list.component';

@Component({
  selector: 'my-app',
  template: `
    <div class="container center">
      <h1>Skeleton Angular2 App!</h1>
      <p>This is also part of the template!</p>
      <p>Jon said 'always drink upstream from the herd'</p>
    </div>
  `
})

export class AppComponent {
  public meals: Meal[];
  constructor() {
    this.meals = [
      new Meal("Burrito", "Lean Meat, not too much cheese", "370", 0)
    ];
  }
  mealWasSelected(clickedMeal: Meal): void {

  }
}
