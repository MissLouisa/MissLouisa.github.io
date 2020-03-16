// this code runs once, immediately when the js file is pulled down
let reArray = [];

let selectedSection = "not selected";  // for my dropdown list of subjects

// define a constructor to create RE objects
var reObject = function (pLink, pTitle, pAuthor, pPosition, pSection) {
  this.Link = pLink;
  this.Title = pTitle;  
  this.Author = pAuthor;
  this.Position = pPosition;
  this.Section = pSection;
} // end of run once code

// code in this block waits untill everything had come down from server, then it runs
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("buttonAdd").addEventListener("click", function () {
    let newRE = new reObject(document.getElementById("link").value, document.getElementById("title").value,
      selectedSection, document.getElementById("author").value, document.getElementById("position").value);
      addNewRE(newRE); // now post new RE object to node server
  });

  // this deals with the event when the drop down changes
  $(document).bind("change", "#select-section", function (event, ui) {
    selectedSection = $('#select-section').val();
  });

  // two sort button events. after running these, the local array is not in the same
  // order as the server array, but have no dependence on the order of items in the two arrays
  document.getElementById("buttonSortTitle").addEventListener("click", function () {
    reArray = reArray.sort(compareTitle);
    createList();
  });

  document.getElementById("buttonSortSection").addEventListener("click", function () {
    reArray = reArray.sort(compareSection);
    createList();
  });

  // delete button
  document.getElementById("buttonDelete").addEventListener("click", function () {
    let deleteTitle = document.getElementById("deleteTitle").value;
    // doing the call to the server right here
    fetch('users/deleteRE/' + deleteTitle , {
    // users/deleteSubject/REinIphone   for example, this is what the URL looks like sent over the network
      method: 'DELETE'
    })  
    // now wait for 1st promise, saying server was happy with request or not
    .then(responsePromise1 => responsePromise1.text()) // ask for 2nd promise when server is node
    .then(responsePromise2 =>  console.log(responsePromise2), document.location.href = "index.html#refreshPage")  // wait for data from server to be valid
    // force jump off of same page to refresh the data after delete
    .catch(function (err) {
        console.log(err);
        alert(err);
    });
  });

  $(document).on("pagebeforeshow", "#page5", function (event) {   // have to use jQuery 
    FillArrayFromServer();  // need to get fresh data
    // createList(); this can't be here, as it is not waiting for data from server
  });

  // leaving page5 to force the pagebeforeshow on page5 from within that page when delete
  $(document).on("pagebeforeshow", "#refreshPage", function (event) {   
    document.location.href = "index.html#page5";
  });
  
  document.getElementById("buttonClear").addEventListener("click", function () {
    document.getElementById("link").value = "";
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("position").value = "";
  });
  
  $(document).on("pagebeforeshow", "#page1", function (event) {   // have to use jQuery 
    document.getElementById("link").value = "";
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("position").value = "";
  });

  $(document).on("pagebeforeshow", "#page2", function (event) {   // have to use jQuery 
    document.getElementById("link").value = "";
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("position").value = "";
  });

  $(document).on("pagebeforeshow", "#page3", function (event) {   // have to use jQuery 
    document.getElementById("link").value = "";
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("position").value = "";
  });

  $(document).on("pagebeforeshow", "#page4", function (event) {   // have to use jQuery 
    document.getElementById("link").value = "";
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("position").value = "";
  });

  $(document).on("pagebeforeshow", "#page5", function (event) {   // have to use jQuery 
    document.getElementById("link").value = "";
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("position").value = "";

    let localTitle = document.getElementById("myListOfThings").innerHTML;
    for (let i=0; i < reArray.length; i++) {   
      if (reArray[i].Title == localTitle){
        document.getElementById("oneLink").innerHTML = reArray[i].Link;
        document.getElementById("oneTitle").innerHTML = reArray[i].Title;
        document.getElementById("oneAuthor").innerHTML = reArray[i].Author;
        document.getElementById("onePosition").innerHTML = reArray[i].Position;
        document.getElementById("oneSection").innerHTML = reArray[i].Section;
      }  
    }
  });
});

function createList() {
  // clear prior data
  var divRElist = document.getElementById("divREList");
  while (divREList.firstChild) {    // remove any old data so don't get duplicates
  divREList.removeChild(divREList.firstChild);
};

var ul = document.createElement('ul');  
reArray.forEach(function (element,) {   // use handy array forEach method
  var li = document.createElement('li');
  li.innerHTML = "<a data-transition='pop' class='oneRE' data-parm=" + element.Title + "  href='#page5'>Get Details </a> "  + element.Title + "  " + element.Section;
  // ok, this is weird.  If I set the href in the <a  anchor to detailPage, it messes up the success of
  // the button event that I add in the loop below.  By setting it to home, it jumps to home for a second
  // but then the button event sends it correctly to the detail page and the value of data-parm is valid.
  ul.appendChild(li);
});

divREList.appendChild(ul);

//set up an event for each new li item, if user clicks any, it writes >>that<< items data-parm into the hidden html 
  var classname = document.getElementsByClassName("oneRE");
  Array.from(classname).forEach(function (element) {
    element.addEventListener('click', function() {
      var parm = this.getAttribute("data-parm");  // passing in the record.Id
    //  document.getElementById("IDparmHere").innerHTML = parm;
    //  document.location.href = "index.html#page5";
        document.getElementById("myListOfThings").innerHTML = parm;
        document.location.href = "index.html#page5";
        document.getElementById("myListOfThings");
        var nodeTest = document.createElement("li");
        var textNodeTest = document.createTextNode("test1");
        nodeTest.appendChild(textNodeTest);
        document.getElementById("myListOfThings").appendChild(nodeTest);
    });
  });
};

function compareTitle(a, b) {
  // Use toUpperCase() to ignore character casing
  const reA = a.Title.toUpperCase();
  const reB = b.Title.toUpperCase();

  let comparison = 0;
  if (reA > reB) {
    comparison = 1;
  } else if (reA < reB) {
    comparison = -1;
  }
    return comparison;
}
  
function compareSection(a, b) {
  // Use toUpperCase() to ignore character casing
  const sectionA = a.Section.toUpperCase();
  const sectiontB = b.Section.toUpperCase();

  let comparison = 0;
  if (sectionA > sectionB) {
    comparison = 1;
  } else if (sectionA < sectionB) {
    comparison = -1;
  }
  return comparison;
}

// code to exchange data with node server
function FillArrayFromServer() {
  // using fetch call to communicate with node server to get all data
  fetch('/users/REList')
  .then(function (theResonsePromise) {  // wait for reply.  Note this one uses a normal function, not an => function
    return theResonsePromise.json();
  })
  .then(function (serverData) { // now wait for the 2nd promise, which is when data has finished being returned to client
    console.log(serverData);
    reArray.length = 0;  // clear array
    reArray = serverData;   // use our server json data which matches our objects in the array perfectly
    createList();  // placing this here will make it wait for data from server to be complete before re-doing the list
  })
  .catch(function (err) {
    console.log(err);
  });
};

// using fetch to push an object up to server
function addNewRE(newRE) { 
  // the required post body data is our RE object passed in, newRE
  // create request object
  const request = new Request('/users/addRE', {
    method: 'POST',
    body: JSON.stringify(newRE),
    headers: new Headers( {
      'Content-Type': 'application/json'
    })
  });

  // pass that request object we just created into the fetch()
  fetch(request)
  // wait for frist server promise response of "200" success (can name these returned promise objects anything you like)
  // Note this one uses an => function, not a normal function, just to show you can do either 
  .then(theResonsePromise => theResonsePromise.json())    // the .json sets up 2nd promise
  // wait for the .json promise, which is when the data is back
  .then(theResonsePromiseJson => console.log(theResonsePromiseJson), document.location.href = "#page5")
  // that client console log will write out the message I added to the Repsonse on the server
  .catch(function (err) {
    console.log(err);
  });
}; // end of addNewUser
