var button = document.querySelector(`button`);
var heading = document.querySelector(`h1`);
var img = document.querySelector(`img`);

function setUserName() {
    var name = prompt(`Please enter your name.`)
    localStorage.setItem(`name`, name);
    heading.textContent = `${name}`;
    if(/саня/i.test(heading.textContent)) {
        img.setAttribute(`src`, `images/sanya.jpg`)
    } else {
        img.setAttribute(`src`, `images/masha.jpg`)
    }
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