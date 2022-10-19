import { meals } from "./db";
import { mealType } from "./mealType";

// Création du TYPE 'Product' contenant des PROPRIETES
export type Product = {
  idIngredient?: string;
  strIngredient: string;
  strDescription?: string | null;
  strType?: string | null;
  price?: number;
  stock?: number;
};

// Initialisation du TABLEAU 'products' qui accueillera les données de meals
// let meals: Product[] =[];

console.log("Avant:" + meals.length);

function addProduct(data: Product) {
  meals.push(data);
}

addProduct({
    idIngredient: `${meals.length + 1}`,
    strIngredient: "Couillesdemoutons",
    strDescription: "tout est dans son nom, mais c'est bon!",
    price: 0
});

console.log("Après:" + meals.length);
console.log(meals[574]);
