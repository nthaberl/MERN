// findObjectsFilter(searchFor, itemsArr)

// given a 'search for' object with primitive values and a list of objects
// return a new list of objects containing the same key value pairs as the search for

// given searchFor and items
const items = [
    { firstName: "Bob", lastName: "Robert", age: 31 },
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "White", age: 31 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
];

const searchFor1 = {
    firstName: "Bob",
};
// return a new list of objects containing the same key pair values
const output1 = [
    { firstName: "Bob", lastName: "Robert", age: 31 },
    { firstName: "Bob", lastName: "White", age: 31 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
];

const searchFor2 = {
    lastName: "Smith",
};
const output2 = [
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
];

function findObjectsFilter(searchObj, items) { 
    // console.log("the keys are", Object.keys(items));
    // console.log("the values are", Object.values(items));
    let filteredArray = []
    const search = searchObj.firstName;
    const searchLast = searchObj.lastName;
    const searchAge = searchObj.age;
    for (i = 0; i < items.length; i++){
        if (items[i].firstName === search){
            filteredArray.push(items[i])
        }
        else if (items[i].lastName === searchLast){
            filteredArray.push(items[i])
        }
        else if (items[i].age === searchAge){
            filteredArray.push(items[i])
        }
        }
        return filteredArray
    }

console.log(findObjectsFilter(searchFor1, items));
// console.log(findObjectsFilter(searchFor1, items).toString() == output1.toString());
// console.log(findObjectsFilter(searchFor2, items));

/* var doggo = {
    name: "Spark",
    age: 8,
    favFood: "Scooby Snacks",
    canBark: true,
} */

/* //accessing values
console.log(Object.keys(doggo)); // returns an array with all the keys in the object
console.log(Object.values(doggo)) //returns array with values
console.log(Object.entries(doggo)); //returns an array full of arrays-2 dimensional array, 1st index is key, 2nd is values

//hasownproperty
doggo.hasOwnProperty("canBark"); //returns bool


//iterate through object
for (someKey in doggo){
    console.log(someKey, doggo[someKey])
} */