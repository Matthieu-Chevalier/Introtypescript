// const test:any= 1 + 1
// const test1:any= "world"
// const test3:any= `${test} world`
// const test2:any= 'Fait t\'il beau aujourd\'hui ?'

// console.log(test);

// oeufs, beurre, farine, blé, sucre, sel, eau
// -ingredients -bases      -sucre
//                          -Farine
//              -Proteines  -oeuf
//                          -lait
//                          -viande blanche
//              -fruits     -Banane
//                          -Pommes
//              -legumes    -legumineuses   -pois_chiches
//                                          -mogettes
// ingredient
//     Categorie
//     nom
// Créer un tableau vide et le typer
//let ingredients: string[] = [];
// - Ajouter un ingrédient en dernier dans le tableau
//ingredients.push("pommes");
// // - Ajouter un ingrédient en premier dans le tableau
// ingredients.unshift('sel', 'lait');

// // - Modifier un ingrédient en utilisant son index
// ingredients.splice(0, 1, 'beure');
// // - Modifier un ingrédient en utilisant sa clé
// ingredients[ingredients.indexOf('beure')] = "beurre";

// // - Supprimer l'ingrédient à l'index 0
// ingredients.splice(0,1);
// // - Supprimer un ingédrient en utilisant sa clé
// ingredients.splice(ingredients.indexOf("farine"),1);
// // - Supprimer le premier ingrédient du tableau
// ingredients.shift();
// // - Supprimer le dernier ingrédient du tableau
// ingredients.pop();

// Exercice 3:

// - Créer un deuxième tableau d'ingrédients
//const bases: string[] = ["Farine", "sucre", "eau"];

// - Fusionner les deux tableaux (Attention la méthode concat retourne un nouveau tableau qui est le résultat de la concatenation)
//ingredients = ingredients.concat(bases);
//console.log(ingredients);

// - Afficher le résultat de la fusion */

// On déclare un ENUM pour lister les catégories d'ingrédients

enum Category {
    FRUITS ="fruit",
    LEGUMES= "Légume",
    BASES="Base"
}

// Créer un nouveau type stockant deux propriétés de type chaine de caractère et une propriété de type number
type Produit = {
  category: Category; 
  name: string;
  id?: number | 0;// Le ? indique que cette propriété est optionnelle
};

// Définir un tableau Produit,
let produits: Produit[] = [];

// produits.push({name:"kiwi",category: Category.FRUITS})

function addProduct(name: string, category: Category, id?: number){
    produits.push({id, name, category})
    return produits;
}

// On récupère des informations depuis internet ou une base de données
const results: Produit[] = [{name: "banane",category: Category.FRUITS }, {category: Category.BASES, name: "farine" }];

for(let i=0; i < results.length; i++) {
    addProduct(results[i].name, results[i].category)
}

// On affiche le tableau nommé produit

console.log(produits);