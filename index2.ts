import { meals } from "./db";

const categories = new Set(
  meals.map((meal: any, index: number) => {
    return meal.strType;
  })
);

console.log(categories);
