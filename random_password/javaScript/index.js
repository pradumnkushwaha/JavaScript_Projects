const number = "1234567890";
const capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const small =   "abcdefghijklmnopqrstuvwxyz";
const special = "!@#$%^&*()-=+/"
var series ="";
const total = document.getElementById("length").value;
console.log(total)

// const letter_random =Math.floor((Math.random()*100)%25) ;
// const special_random =Math.floor((Math.random()*100)%13) ;
// const number_random =Math.floor((Math.random()*100)%9) ;
const upper_input = document.getElementById("capital")
const lower_input = document.getElementById("small")
const number_input = document.getElementById("numbers")
const symbol_input = document.getElementById("special")





const getRamdomData = (dataset) =>{
    return dataset[Math.floor(Math.random()*dataset.length)]
}

function generatePass(){
   if(upper_input.checked)
   {
    series = series+getRamdomData(capital)
   }
   if(lower_input.checked)
   {
    series = series+getRamdomData(small)
   }
   if(number_input.checked)
   {
    series = series+getRamdomData(number)
   }
   if(symbol_input.checked)
   {
    series = series+getRamdomData(special)
   }
   if(series.length<total)
   {
    return generatePass()
   }
    
    const truncate = series.substring(0,total)
    document.getElementById("input").innerText=truncate
   console.log(truncate)
   

}
function submit(){

    generatePass()
}