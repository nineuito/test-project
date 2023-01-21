var myImage =  document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/my-photo.jpg') {
        myImage.setAttribute('src','images/icon-human.png');
    } else {
        myImage.setAttribute('src','images/my-photo.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Wellcome to my site, ' + myName;
    if(!localStorage.getItem('name')) {
        setUserName();
    } else {
        var storedName = localStorage.getItem('name');
        myHeading.textContent = 'Wellcome to my site, ' + storedName;
    }
}

myButton.onclick = function() {
    setUserName();
}
