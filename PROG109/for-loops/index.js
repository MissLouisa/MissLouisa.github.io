window.onload = () => {
    const elfCode = {
        appendToList: (list, value) => {
            const li = document.createElement("li");
            li.appendChild(document.createTextNode(value));
            list.appendChild(li);
        }
    };

    const listButton = document.getElementById('runForLoopAction');

    listButton.onclick = () => {
        const myList = document.getElementById('myList');
            for(let i = 0; i < 5; i++) {
                elfCode.appendToList(myList, i);
            }
    };
};
