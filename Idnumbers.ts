// Objectif: créer un tableau qui contient tous les "idIngredient"

import {meals} from "./db";
import { Product } from "./index";

//Quelques tests pour acquérir des valeurs
const idNumber: number=33;//On défini arbitrairement un index


//On souhaite acquérir l'une des propriétés d'un objet, par exemple le nom de l'ingrédient "strIngredient"
// let name: string|undefined = meals[idNumber].idIngredient;
// console.log(name);

//Méthode intuitive: untiliser une boucle
 let idList:any[]=[];
//  idList.push(name);
// console.log(idList);

// for (let i=0;i<meals.length;i++){
//     idList.push(meals[i].idIngredient)
    
//  };
//  console.log(idList);

 //Avec la methode "map"
 let ids = new Set(
    meals.map((data: any, index: number)=>{return data.idIngredient;
    })
 );
 console.log(`L\'objet ids est un tableau: ${Array.isArray(ids)}`);
 idList= Object.keys(ids);
 console.log(`L\'objet idList est un tableau: ${
     Array.isArray(idList)
 }`);

 // En apparence le résultat est le même