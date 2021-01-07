const button = document.querySelector('button');
const body = document.querySelector('body');
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple'];

body.style.backgroundColor = 'violet';
button.addEventListener('click', changeBackground);

function changeBackground(){
const colorIndex= parseInt(Math.random()*colors.length);
body.style.transition = "3s";
body.style.backgroundColor =  colors[colorIndex];
}

const container = document.getElementById('container');
const colors1 = ['purple', 'pink', 'yellow', 'blue', 'green', 'red'];

container.style.backgroundColor = 'orange';
button.addEventListener('click', changeBackground1);
container.addEventListener('touchmove', changeBackground1);

function changeBackground1(){
const colorIndex1= parseInt(Math.random()*colors1.length);
container.style.transition = "2s";
container.style.backgroundColor = colors1[colorIndex1]
}
