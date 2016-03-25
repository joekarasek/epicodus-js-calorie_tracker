export class MealItem {
  constructor(
    public name: string,
    public calories: number,
    public notes: string,
    public mealType: string // Breakfast, Lunch, Dinner, or Snack
  ) {}
}
