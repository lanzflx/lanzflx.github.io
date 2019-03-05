var myButton = document.querySelector('button');
var myHeading = document.querySelector('body span');    //select text before header.

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = myName;
}   

if(!localStorage.getItem('name')){
    setUserName();
} else {
     var storedName = localStorage.getItem('name');
     myHeading.textContent = storedName;
}

myButton.onclick = function() {
    setUserName();
}