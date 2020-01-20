///necessary to swap the letters
function reverse_str(s) {
    let str = s.split("");
    let rs = str.reverse();
    return rs.join("");
}

let arrayWords = [];

//function that gets the words from user
function getWord() {
    arrayWords = [];
    for (let i = 0; i < 3; i++) {
        //popup
        let wordByUser = prompt("Please enter a word", "type anything");
        //array didnt accept null and if the user cancel, the arrays is going to be reseted
        if (wordByUser == null) {
            arrayWords.splice(0,2);
            break;
        }
        arrayWords.push(wordByUser);
    }
    let u = document.getElementById('listDisplay');

    //create li tag with the words from user
    for (let i = 0; i < arrayWords.length; i++) {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(arrayWords[i]));
        u.appendChild(li);
    }

    //first button disappears
    document.getElementById('wordByUser').style.visibility = 'hidden';

    //the second button is false if visible
    document.getElementById('toggler').style.visibility = 'visible';
}

//function about the second button when clicked
function offline() {

    document.getElementById('toggler').style.visibility = 'hidden';

    let v = document.getElementById('listDisplay');

    //swap 
    while (v.firstChild) {
        v.firstChild.remove();
    }

    //new li, it is with the words swapped
    for (let j = 0; j < arrayWords.length; j++) {
        let li = document.createElement('li');
        let newword = reverse_str(arrayWords[j])
        li.appendChild(document.createTextNode(newword));
        v.appendChild(li);
    }
}
