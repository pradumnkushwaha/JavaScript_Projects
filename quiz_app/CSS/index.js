const questions = [
    {
    
    'ques': "what is you name ?",
    'a': "rahul0000000000",
    'b': "ram0000000000",
    'c': "shyam00000000",
    'd': "prad00000000000000",
    'correct': "a",
    },
    {
    
        'ques': "what isse ?",
        'a': "rahul1111111",
        'b': "ram11111111",
        'c': "shyccccam111111",
        'd': "prad1111111",
        'correct': "b",
        },{
    
            'ques': "what is ?",
            'a': "rahul222222",
            'b': "ramcccc222222222",
            'c': "shyam2222222222",
            'd': "prad2222222",
            'correct': "c",
            },{
    
                'ques': "what sdsdcdcdcname ?",
                'a': "rahcdcccdcul33333333333",
                'b': "ram333333",
                'c': "shyam33333",
                'd': "prad3333333333",
                'correct': "d",
                }
]

var index = 0
const opt = document.querySelectorAll('.option')

var right = 0;
var wrong = 0;
const box=() =>{
    const data = questions[index]
    if(index>3)
    {
        exit()
        return
    }
    document.getElementById("h2").innerHTML=data.ques
    
    opt[0].nextElementSibling.innerHTML=data.a
    opt[1].nextElementSibling.innerHTML=data.b
    opt[2].nextElementSibling.innerHTML=data.c
    opt[3].nextElementSibling.innerHTML=data.d


}
function exit(){
    console.log("you score is "+right+"   "+"wrong"+wrong)
    document.getElementById("boxx").innerHTML=
    `<div style= "text-align:center">
    <h2>your final score is ${right} /4</h2>
    </div>`

}


function clicked(){
    const data = questions[index]
    var selectedValue = document.querySelector(   
        'input[name="option"]:checked');
        {   
        if(selectedValue.value ==data.correct)
        {
           right++
        }
        else{
            wrong++
        }}
        console.log("q")

        selectedValue.checked=false
    
index++
box()

}
box()