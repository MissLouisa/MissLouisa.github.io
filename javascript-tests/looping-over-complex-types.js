function divider() {
    console.log("------------------\n------------------")
}

const myArray = [];

const numbers = [1, 2, 3, 4, 5, 8, 10];
console.log(numbers);
console.log("Fourth number:", numbers[3]);
console.log(numbers[0]);
console.log("Length:", numbers.length);
console.log("Number 3:", numbers[numbers.length - 1]);

const files = ["bundle.js", "*.js.map", ".c9"];
console.log(files.join(', '))

const filesNames = "bundle.js, *.js.map, .c9";
console.log(filesNames.split(','));

const items = [1, 'two', [3, 4], false, null];
console.log(items);
divider();

for (let i = 0; i < items.length; i++) {
    console.log("value of i: ", i);
    console.log("Item", items[i]);
}
divider();

for (let item in items) {
    console.log(item);
}
divider();

let myObject = {};

const smallNumbers = {
    one: 5,
    two: "two"
};
console.log("ObjectS: ", myObject, smallNumbers);

console.log("Values in object: ", smallNumbers.one, smallNumbers.two);

myObject.newItem = "This is a new item in my object.";
console.log(myObject.newItem);

items.push(myObject)
console.log(items)
