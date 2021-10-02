var button = document.querySelector(`button`);
var heading = document.querySelector(`h1`);

function setUserName() {
    var name = prompt(`Please enter your name.`)
    localStorage.setItem(`name`, name);
    heading.textContent = `${name}`;
};

if(!localStorage.getItem(`name`)) {
    setUserName();
} else {
    var storName = localStorage.getItem(`name`);
    heading.textContent = `${storName}`;
};

button.onclick = function() {
    setUserName();
};