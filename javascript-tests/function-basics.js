const elfCode = {
    appendToList: (list, value) => {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(value));
        list.appendChild(li);
    }
};

window.onload = () => {
    const functionCalls = document.getElementById('functionCallsAction');
    const addToListAction = document.getElementById('addToListAction');

    console.log('foo');
    functionCalls.onclick = () => {
        // Both these functions get their display control
        simpleFunction();
        functionParameters(value);
        functionReturn();
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

        const simpleFunctionDisplay2 = document.getElementById("simpleFunctionDisplay2");
        simpleFunctionDisplay2.textContent = displayText;
    }

    function functionParameters(value) {
        console.log(value);

        const functionParametersDisplay = document.getElementById("functionParameters");
        functionParametersDisplay.textContent = value;
    }

    function functionReturn() {
        const displayReturn = "Many functions return values.";

        const functionReturnDisplay = document.getElementById("functionReturn");
        functionReturnDisplay.textContent = displayReturn;
        return displayReturn;
    }

    functionCallsAction.onclick = function() {
        simpleFunction();
        functionParameters(value);
        functionReturn();
    }

    functionParameters("Many functions take parameters.");
}


