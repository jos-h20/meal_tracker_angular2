import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { NewMealComponent } from './new-meal.component';
import { EditMealDetailsComponent } from './edit-meal-details.component';
import { Meal } from './meal.model';
import { HealthyPipe } from './healthy.pipe';


@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  pipes: [HealthyPipe],
  directives: [MealComponent, NewMealComponent, EditMealDetailsComponent],
  template: `
  <div class="index">
    <select (change)="onChange($event.target.value)" class="filter">
      <option value="all" selected="selected">Show All</option>
      <option value="healthy">Healthy Food Under 300 calories</option>
      <option value="unhealthy">Unhealthy Food Over 300 calories</option>
    </select>

    <div *ngFor="#currentMeal of mealList | healthy:filterHealthy"
        [class.selected]="currentMeal === selectedMeal">
        <h3 (click)="mealWasSelected(currentMeal)">
          {{ currentMeal.name }}
        </h3>
        <meal-display *ngIf="currentMeal === selectedMeal" [meal]="currentMeal"></meal-display>
    </div>

    <edit-meal-details *ngIf="selectedMeal" [meal]="selectedMeal">
    </edit-meal-details>
  </div>
  <h2>Add Meal:</h2>
  <div class="add-meal-form">
    <new-meal (onSubmitNewMeal)="logMeal($event)"></new-meal>
  </div>
  `
})

export class MealListComponent {
  public mealList: Meal[];
  public selectedMeal: Meal;
  public filterHealthy: string = "all";
  logMeal(newMeal: Meal): void {
    this.mealList.push(
      new Meal(newMeal.name, newMeal.calories, newMeal.details, this.mealList.length)
    );
  }
  onChange(filterOption) {
    this.filterHealthy = filterOption;
  }
  mealWasSelected(clickedMeal: Meal): void {
    if(this.selectedMeal === clickedMeal) {
      this.selectedMeal === undefined;
    } else {
      this.selectedMeal = clickedMeal;
    }
    console.log(clickedMeal);
  }
}
