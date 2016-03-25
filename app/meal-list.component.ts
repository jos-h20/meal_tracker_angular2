import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from '.meal.component';
import { Meal } from './meal.model';


@Component([
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  directives: [MealComponent],
  template: `

  `
])

export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public filterHealthy: string = "notHealthy";
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
  logMeal(newMeal: Meal): void {
    this.mealList.push(
      new Meal(newMeal.name, newMeal.calories, newMeal.details, this.mealList.length)
    );
  }
  onChange(filterOption) {
    this.filterHealthy = filterOption;
  }
}
