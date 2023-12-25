console.log("hola koders")

let grettingButton= document.getElementById("greeting-button" )

console.log (grettingButton)

let paragraph = document.getElementsByTagName("p")
console.log(paragraph)
console.log(paragraph[0])


let listGroupItems = document.getElementsByClassName("list-gour-item")
console.log (listGroupItems)

const changeColor =()=>{
for(let i=0; i< listGroupItems.length;i++){
    listGroupItems[i].style.color="peru"
}
}