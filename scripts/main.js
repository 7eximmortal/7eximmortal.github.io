var img = document.querySelector('img');

img.onclick = () => {
    var src = img.getAttribute('src');
    
    if (src == `images/chelik.jpg`) {
        img.setAttribute(`src`, `images/chelik2.jpg`);
    } else {
        img.setAttribute(`src`, "images/chelik.jpg");
    };
};