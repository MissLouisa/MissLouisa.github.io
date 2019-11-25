window.onload = () => {

    const feetToInchesAction =
        document.getElementById('feetToInchesAction');
    const milesToFeetAction =
        document.getElementById('milesToFeetAction');
    const triangleAction =
        document.getElementById('areaOfTriangleAction');
    const circleAction =
        document.getElementById('areaOfCircleAction');

    feetToInchesAction.onclick = () => {
        const feetToInchesInput = document.getElementById('feetToInchesInput');
        const feetToInchesDisplay = document.getElementById('feetToInchesDisplay');

        feetToInchesDisplay.textContent = feetToInches(feetToInchesInput.value);
    };

    milesToFeetAction.onclick = () => {
        const milesToFeetInput = document.getElementById('milesToFeetInput');
        const milesToFeetDisplay= document.getElementById('milesToFeetDisplay');

        milesToFeetDisplay.textContent = milesToFeet(milesToFeetInput.value);
    };


    triangleAction.onclick = () => {
        const areaOfTriangleInput1 = document.getElementById('areaOfTriangleInput1');
        const areaOfTriangleInput2 = document.getElementById('areaOfTriangleInput2');
        const areaOfTriangleDisplay = document.getElementById('areaOfTriangleDisplay');

        areaOfTriangleDisplay.textContent = areaOfTriangle(areaOfTriangleInput1.value, areaOfTriangleInput2.value);
    };

    circleAction.onclick = () => {
        const areaOfCircleInput = document.getElementById('areaOfCircleInput');
        const areaOfCircleDisplay = document.getElementById('areaOfCircleDisplay');

        areaOfCircleDisplay.textContent = areaOfCircle(areaOfCircleInput.value);
    };

};

const feetToInches = (feet) => {
    return feet * 12;
};

const milesToFeet = (miles) => {
    return miles * 5280;
}

const areaOfCircle = (radius) => {
    return radius * radius * Math.PI;
}

const areaOfTriangle = (base, height) => {
    return 1 / 2 * base * height;
}
