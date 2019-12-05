const parameters = "Many functions take parameters.";

function simpleFunction() {
    const displayText = "Functions should consist of statements designed to perform a single task.";
    console.log(displayText);

    simpleFunctionDisplay.textContent = displayText;
}

function functionParameters(parameters) {
    console.log(parameters);

    const functionParametersDisplay = document.getElementById("functionParametersDisplay");
    functionParametersDisplay.textContent = parameters;
}

function functionReturn() {
    const displayReturn = "Many functions return values.";

    functionReturnDisplay.textContent = displayReturn;
    return displayReturn;
}

window.onload = () => {
    const simpleFunctionDisplay = document.getElementById("simpleFunctionDisplay");
    const functionParametersDisplay = document.getElementById("functionParametersDisplay");
    const functionReturnDisplay = document.getElementById("functionReturnDisplay");
    const functionCallsAction = document.getElementById("functionCallsAction");
    const listButton = document.getElementById("addToListAction");

    functionCallsAction.onclick = function() {
        // Both these functions get their display control
        simpleFunction();
        functionParameters(parameters);
        functionReturn();
    };

    listButton.onclick = () => {
        const newList = document.getElementById("listDisplay");
        addToList.appendToList(newList, nameDisplay.value);
    };

    const addToList = {
        appendToList: (list, txt) => {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(txt));
            list.appendChild(li);
        }
    };
};
