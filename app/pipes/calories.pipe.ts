import { Pipe, PipeTransform } from 'angular2/core';
import { MealItem } from '../models/MealItem.model';

@Pipe({
  name: "calories",
  pure: false
})
export class CaloriesPipe implements PipeTransform {
  transform(input: MealItem[], args) {
    var desiredCalorieFilter = args[0];
    if (desiredCalorieFilter === "low") {
      return input.filter((meal) => {
        return (meal.calories <= 300);
      });
    } else if (desiredCalorieFilter === "high") {
      return input.filter((meal) => {
        return (meal.calories > 300);
      });
    } else {
      return input;
    }
  }
}
