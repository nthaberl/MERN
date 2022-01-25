/* 
  Recreate Object.entries() method
  Given an object,
  return an array of arrays of the object's key value pairs, where each key value pair is a 2 item array
  Do not include key value pairs from the given objects prototype (these are included by default when looping over an object's keys)
*/

const obj1 = {
    name: "Pizza",
    calories: 9001,
};
const expected1 = [
    ["name", "Pizza"],
    ["calories", 9001],
];

const obj2 = {
    firstName: "Foo",
    lastName: "Bar",
    age: 13,
};
const expected2 = [
    ["firstName", "Foo"],
    ["lastName", "Bar"],
    ["age", 13],
];

// obj1.__proto__ = obj2;

/*create result array resArr, that we can push arrays into for our answer
for loop that looks at each value in the object and assigns new values to a objArr
return that resArr*/

function entries(obj) {
    // setup for the result
    const resArr = [];

    // iterate thru obj and we'll have the key
    for (const key in obj) {
        // use the obj[key] get the value
        const value = obj[key];
        resArr.push([key, value]) // resArr.push([key, obj[key]])
    }
    return resArr
}
// console.log(entries(obj1));
// console.log(entries(obj2));

// ==================================================

/* 
  Given a table name string and an object whose key value pairs represent column names and values for the columns
  return a SQL insert statement string
  Tip: string interpolation (using back ticks, the key to the left of num 1 key) make it easy to add variables into a string or to add quotations without needing to escape them.
  Bonus: after solving it, write a 2nd solution focusing on functional programming using built in methods
*/

const table = "users";
const insertData1 = { first_name: "John", last_name: "Doe" };
const expectedA =
    "INSERT INTO users (first_name, last_name) VALUES ('John', 'Doe');";

// Bonus:
const insertData2 = {
    first_name: "John",
    last_name: "Doe",
    age: 30,
    is_admin: false,
};
const expectedB =
    "INSERT INTO users (first_name, last_name, age, is_admin) VALUES ('John', 'Doe', 30, false);";
// Explanation: no quotes around the int or the bool, technically in SQL the bool would become a 0 or 1, but don't worry about that here.

function insert(tableName, columnValuePairs) {
    const keyAndValues = entries(columnValuePairs);
    // let resultStatement = `INSERT INTO ${tableName} (${keys}) VALUES (${values});`
    let keys = ""
    let values = ""

    for (let i = 0; i < keyAndValues.length; i++) {
        let key = keyAndValues[i][0]
        let value = keyAndValues[i][1]
        if (i === 0) {
            keys += `${key}`
            if (typeof value === 'string') {
                values += `'${value}'`
            } else {
                values += `${value}`
            }
        } else {
            keys += `, ${key}`
            if (typeof value === 'string') {
                values += `,'${value}'`
            } else {
                values += `, ${value}`
            }
        }
    }

    // for (let i = 0; i < keyAndValues.length; i++) {
    //     const key = keyAndValues[i][0]
    //     const value = keyAndValues[i][1]
    //     if (i === 0) {
    //         keys += `${key}`
    //         typeof value === 'string'
    //             ? values += `'${value}'`
    //             : values += `${value}`
    //     } else {
    //         keys += `, ${key}`
    //         typeof value === 'string'
    //             ? values += `,'${value}'`
    //             : values += `, ${value}`
    //     }
    // }

    return `INSERT INTO ${tableName} (${keys}) VALUES (${values});`
}
console.log(insert(table, insertData1));
console.log(insert(table, insertData2)); // BONUS