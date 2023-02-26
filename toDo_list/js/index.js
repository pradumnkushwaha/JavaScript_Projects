const item = document.querySelector("#item");
const toDO = document.querySelector("#toDoList");


item.addEventListener(
"keyup",function(event)

{
    if(event.key=="Enter")
    {
   addTODO( this.value)
   this.value=""
    }
}
)

const addTODO=(item)  =>{
        const add = document.createElement("li")
        add.innerHTML=
        `
        ${item}
        <i class=" cross fa-solid fa-xmark"></i>
        `;
        
        toDO.appendChild(add);

        add.addEventListener(
            "click",function(){
                this.classList.toggle("done")
            }
        )

        add.querySelector("i").addEventListener(
            "click",function()
            {
                add.remove()
            }
        )
}