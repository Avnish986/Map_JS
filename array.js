let origDogs =["Bulldog" , "Beagle", "Labrador"];
let cats = new Array("Americal", "Curl", "Bengal");
let birds = new Array("Falcons","Ducks","Flamingoes");

//Copy elements
let slicedDogs= origDogs.slice(1,2);
let copyDogs = [...origDogs];
let dogs = origDogs.slice(0);

//stack function (lifo) push and pop
let pushDog = dogs.push("Golden Retriever");
let popDog = dogs.pop();
dogs[dogs.length]="Poodle";

//Add and remove from first
let addFirst = dogs.unshift("Golden Retriever");
let shiftDog = dogs.shift();

//Atomic add and remove elements(where, how many to remove, element list)
dogs.splice(2,1,"Pug","Boxer");

//Array Function -Concat,Spread,Slice and Sort
let animals=dogs.concat(cats,birds);
let newAnimal = [...dogs,...cats, ...birds].toString();
let sortDog = dogs.slice(0).sort();
function scanArray([first,second]){console.log("Scan: "+first+" "+ second);}
scanArray(animals);
let joinAnimals = animals.join(" ");
let allAnimals ="";
for(let animal of animals) allAnimals+=animal+" ";

console.log("Animals: "+allAnimals);