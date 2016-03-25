import {Pipe, PipeTransform} from 'angular2/core';
import {Meal} from './meal.model';

@Pipe({
  name: "healthy",
  pure: false
})
export class HealthyPipe implements PipeTransform {
  transform(input: Meal[], args) {
    var desiredMealHealth = args[0];


    if(desiredMealHealth === "unhealthy") {
      return input.filter((meal) => {
        return meal.calories > 300;
      });
    } else if(desiredMealHealth === "healthy") {
      return input.filter((meal) => {
        return meal.calories <= 300;
      });
    } else {
      return input;
    }
  }
}
