const simpleObject = {
    sayName: function () {
        var label = "Simple object.";
        console.log(label);
        return label;
    }
};

simpleObject.sayName();

simpleObject.dynamic = function () {
    console.log("dynamic method.");
}

simpleObject.dynamic();

// function constructor
function FunctionObject() {
    FunctionObject.prototype.proto = function () {
        return 'Function object';
    }
};

FunctionObject.prototype.dynamicProto = function () {
    return 'dynamic proto';
};


let obj = new FunctionObject();
console.log(obj.proto());
console.log(obj.dynamicProto());
console.log(obj.constructor.toString());


class custom {
    constructor(word) {
        this.word = word;
    }

    printMe() {
        console.log(this.word);
        return this.word;
    }
};

let myWord = new custom("my word");
myWord.printMe();


function customWorkAround(word) {
    let custom = new custom("custom class");

}

window.onload = () => {

    const simpleObjectDisplay = document.getElementById('simpleObjectDisplay');
    const functionObjectDisplay = document.getElementById('functionObjectDisplay');
    const customClassDisplay = document.getElementById('customClassDisplay');

    const simpleObjectAction =
        document.getElementById('simpleObjectAction');
    const functionObjectAction =
        document.getElementById('functionObjectAction');
    const customClassAction =
        document.getElementById('customClassAction');

    simpleObjectAction.onclick = () => {
        simpleObjectDisplay.textContent = simpleObject.sayName();
    };

    functionObjectAction.onclick = () => {
        let obj = new FunctionObject();
        functionObjectDisplay.textContent = obj.proto();
    };

    customClassAction.onclick = () => {
        let customizedObj = new custom("custom object");
        customClassDisplay.textContent = customizedObj.printMe();
    };
};
