let star = document.createElement('div');
let moon = document.createElement('div');
let star2 = document.createElement('div');
let moon2 = document.createElement('div');

star.className = "planet";
star.style.backgroundColor = "yellow";

moon.className = "moon";
moon2.className = "moon";
moon2.style.backgroundColor = "red";

star2.className = "planet";
star2.style.border = "1px dotted white";
star2.style.boxShadow = "white 0 0 15px"

document.body.appendChild(star);
document.body.appendChild(moon);
document.body.appendChild(star2);
document.body.appendChild(moon2);

