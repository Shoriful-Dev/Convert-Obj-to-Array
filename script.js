// Convert Obj to Array and Convert Array to Obj.

const obj = {
  name:"Shohel Rana",
  age: 21,
  city: "Dhaka",
};
// Obj to Convert Array
let entries = Object.entries(obj);
console.log(entries.flat());

// Array to Convert Obj
let newObj = Object.fromEntries(entries);
console.log(newObj);
