const person = {
    firstName: "Luiza",
    lastName: "Cartaxo",
    fullname: function () {
        return this.firstName + " " + this.lastName;
    }
};
divider('Person');

console.log("First name: " + person.firstName);
console.log("Last name: " + person.lastName);
console.log("Full name: " + person.fullname());

const calculator = {
    operand01: -1,
    operand02: -1,
    add: function () {
        return this.operand01 + this.operand02;
    },
    substract: function () {
        return this.operand01 - this.operand02;
    }
}

divider('Calculator');

calculator.operand01 = person.firstName.length;
calculator.operand02 = person.lastName.length;

console.log("operand01 is the length of firstName: " + calculator.operand01);
console.log("operand02 is the length of lastName: " + calculator.operand02);
console.log("Add length of first and lastNames: " + calculator.add());
console.log("Subtract length of first and lastNames: " + calculator.substract());

calculator.multiply = function(o1, o2) {
    return o1 * o2;
};

console.log("Multiply length of first and lastNames: " + calculator.multiply(calculator.operand01, calculator.operand02));

function divider(title) {
    console.log("\n====================================");
    console.log(title);
    console.log("====================================\n");
}
