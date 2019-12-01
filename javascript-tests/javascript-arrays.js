const elfCode = {
    appendToList: (list, value) => {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(value));
        list.appendChild(li);
    }
};

window.onload = () => {
    const numbersAction = document.getElementById("numbers-action");
    const numbersDisplay = document.getElementById("numbers-display");

    const languageAction = document.getElementById("language-action");
    const languageDisplay = document.getElementById("language-display");

    const arrays = {
        numbers: [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5],
         languages: ["JavaScript", "HTML", "CSS", "Java", "C#", "Python", "C/C++"]
    };

    numbersAction.onclick = () => {
        // before sorting
        for (let number of arrays.numbers) {
            console.log(number);

            elfCode.appendToList(numbersDisplay, number);
        }

        arrays.numbers.sort((a, b) => a - b);

        // after sorting
        for (let number of arrays.numbers) {
            console.log(number);

            elfCode.appendToList(numbersDisplay, number);
        }
    }

    languageAction.onclick = () => {
        // before sorting
        arrays.languages.sort();

        // after sorting
        for (let language of arrays.languages) {
            console.log(language);

            elfCode.appendToList(languageDisplay, language);
        }
    }
};

