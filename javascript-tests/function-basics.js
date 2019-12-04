const elfCode = {
    appendToList: (list, value) => {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(value));
        list.appendChild(li);
    }
};

window.onload = () => {
    const simpleFunctionDisplay = document.getElementById('functionCallsAction');
    const functionCallsAction = document.getElementById('addToListAction');
    functionCallsAction.onclick = simpleFunction;

    console.log('foo');
    functionCalls.onclick = () => {
        // Both these functions get their display control
        simpleFunction();
    };

    addToListAction.onclick = () => {
        const listDisplay = document.getElementById('listDisplay');
        const nameDisplay = document.getElementById('nameDisplay');

        const data = nameDisplay.value;
        elfCode.appendToList(listDisplay, data);
    }

    function simpleFunction() {
        const displayText = "Functions should consist of statements designed to perform a single task.";
        console.log(displayText);

        const simpleFunctionDisplay = document.getElementById("simpleFunctionDisplay");
        simpleFunctionDisplay.textContent = displayText;
    }

    function functionParameters(value) {
        console.log(value);
    }

    function functionReturn(result) {
        return "the add function returned " + result;
    }

    function add(a, b) {
        return a + b;
    }

    functionCallsAction.onclick = function() {
        simple();
    }
}

//simpleFunction();
functionParameters("print me");
}
