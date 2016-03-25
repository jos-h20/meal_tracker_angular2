import {Component, EventEmitter} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
    <div class="add-meal-form">
      <h3>Add Meal:</h3>
      <input placeholder="Name" class="col-sm-8 input-lg" #newName>
      <input type="number" placeholder="Calories" class="col-sm-8 input-lg" #newCalories>
      <input placeholder="Details" class="col-sm-8 input-lg" #newDetails>
      <button (click)="addMeal(newName, newCalories, newDetails)" class="col-sm-4 btn-success btn-lg add-button">Add</button>
    </div>
  `
})
export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<Meal>;
  constructor() {
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(userName: HTMLInputElement, userCalories: HTMLInputElement, userDetails: HTMLInputElement) {
    var newMeal: Meal = new Meal(userName.value, userCalories.valueAsNumber, userDetails.value, 0);
    this.onSubmitNewMeal.emit(newMeal);
  }

}
