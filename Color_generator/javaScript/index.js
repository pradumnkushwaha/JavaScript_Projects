
const getcolor= () =>{


const color = Math.floor(Math.random()*16777215);
const hexCode = "#"+color.toString(16);

document.getElementById("p").innerHTML = hexCode;
document.body.style.backgroundColor = hexCode;

document.getElementById("button").style.backgroundColor = hexCode
}

document.getElementById("button").addEventListener(
    'click',getcolor
);
getcolor()


