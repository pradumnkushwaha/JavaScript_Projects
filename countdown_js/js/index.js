const endDate = "08 Feb 2024 23:29"

document.getElementById("endDate").innerHTML = endDate;
const inputs = document.querySelectorAll("input")



function time(){

    const now = new Date();
const end = new Date(endDate)
if(end-now>=0)
{



    inputs[3].value = Math.floor(((end-now)/1000)%60);
    inputs[2].value= Math.floor((((end-now)/1000)/60)%60);
   inputs[1].value = Math.floor(((((end-now)/1000)/60)/60)%24);
   inputs[0].value= Math.floor((((((end-now)/1000)/60)/60)/24)%24);

}

}




time();
setInterval(() => {
    time()
},1000);


