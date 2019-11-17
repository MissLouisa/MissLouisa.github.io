window.onload = () => {
    const simpleFunctionDisplay = document.getElementById('simpleFunctionDisplay');
    const functionCallsAction = document.getElementById('functionCallsAction');
    functionCallsAction.onclick = simpleFunction;


    function simpleFunction() {
        console.log("simple function here");
        simpleFunctionDisplay.textContent = "some text"
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
