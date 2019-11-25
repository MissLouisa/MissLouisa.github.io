window.onload = () => {

    const simpleObjectDisplay = document.getElementById('simpleObjectDisplay');
    const simpleObjectDisplay = document.getElementById('simpleObjectAction');

    simpleObjectAction
const simpleObject = {
    firstName: 'James',
    lastName: 'Watson',
    sayName: function () {
        const fullName = this.firstName + " " + this.lastName;
        console.log(this.firstName + " " + this.lastName);
        simpleObjectDisplay.textContent = fullName;
    }
};

simpleObjectAction.onclick = function() {
    simpleObject.sayName();
}

simpleObject.dynamicMethod = () => {
    console.log("Dynamic Method");
}

funtion Foo() {
    FunctionObject.prototype.sayName = function() {
        console.log('Function Object');
    }
}

class CostumClass = {
    sayName() {
        console.log("CustomClass");
    }
}
simpleObject.sayName();
simpleObject.dynamicMethod();

const functionObject = new FunctionObject();
functionObject.sayName();

const CustomClass = new CustomClass();
CustomClass.sayName();
