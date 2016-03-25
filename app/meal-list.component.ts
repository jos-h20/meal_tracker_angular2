import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { NewMealComponent } from './new-meal.component';
import { Meal } from './meal.model';
import { HealthyPipe } from './healthy.pipe';


@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  pipes: [HealthyPipe],
  directives: [MealComponent, NewMealComponent],
  template: `
  <select (change)="onChange($event.target.value)" class="filter">
    <option value="all" selected="selected">Show All</option>
    <option value="healthy">healthy</option>
    <option value="unhealthy">unhealthy</option>
  </select>
  <meal-display *ngFor="#currentMeal of mealList | healthy:filterHealthy" (click)="mealClicked(currentMeal)"
    [class.selected]="currentMeal === selectedMeal" [meal]="currentMeal">
  </meal-display>

  <new-meal (onSubmitNewMeal)="logMeal($event)"></new-meal>

  `
})

export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public filterHealthy: string = "all";
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
