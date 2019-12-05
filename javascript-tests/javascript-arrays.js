const arrays = {
  numbers: [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5],
  languages: ["JavaScript", "HTML", "CSS", "Java", "C#", "Python", "C/C++"],
  languagesRanking: [{language: " HTML", rank: 2}, {language: " Bash/Shell", rank: 6}, {language: " SQL", rank: 4}, {language: " JavaScript", rank: 1}, {language: " CSS", rank: 3}, {language: " Python", rank: 7}, {language: " Java", rank: 5}]
};

arrays.numbers.sort((a,b) => a - b);

arrays.languages.sort();

arrays.languagesRanking.sort(compareRank);

function compareRank(a,b) {
    const rankA = a.rank;
    const rankB = b.rank;

    let comparation = 0;

    if (rankA > rankB) {
        comparation = 1;
    } else if (rankA < rankB) {
        comparation = -1;
    }

    return comparation;
}

window.onload = () => {
    const numbersDisplay = document.getElementById("numbers-display");
    const listNumbers = document.getElementById("numbers-action");

    const languagesDisplay = document.getElementById("languages-display");
    const listLanguages = document.getElementById("languages-action");

    const rankDisplay = document.getElementById("languages-rank-display");
    const listRank = document.getElementById("languages-rank-action");

    const addToList = {
        appendToList: (list, name) => {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(name));
            list.appendChild(li);
        }
    };

    const addToList2 = {
        appendToList: (list, name1, name2) => {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(name1));
            li.appendChild(document.createTextNode(name2));
            list.appendChild(li);
        }
    };

    listNumbers.onclick = () => {
        const newList = document.getElementById("numbers-display");
        for (number of arrays.numbers) {
            console.log(number);
            addToList.appendToList(newList, number);
        }
    };

    listLanguages.onclick = () => {
        const newList = document.getElementById("languages-display");
        for (name of arrays.languages) {
            console.log(name);
            addToList.appendToList(newList, name);
        }
    };

    listRank.onclick = () => {
        const newList = document.getElementById("languages-rank-display");
        for (name in arrays.languagesRanking) {
            console.log(arrays.languagesRanking[name].rank, arrays.languagesRanking[name].language);
            addToList2.appendToList(newList, arrays.languagesRanking[name].rank, arrays.languagesRanking[name].language);
        }
    };
};
