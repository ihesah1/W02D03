console.log("Dom");


const selectedItem = document.querySelector(".secondText")
selectedItem.style.fontSize = "25px"




//////////////////////////////
const hesah = document.querySelector(".head")
hesah.style.background = "pink"



//////////////////////////

const container = document.querySelector(".con")

const newItem = document.createElement("p")
container.append(newItem)
newItem.innerHTML ="added p "
newItem.style.color = "blue"


////////////////////
const div2 = document.querySelector("#div2")
const newa = document.createElement("a")
newa.innerHTML="google.com"
newa.href = "https://www.google.com.sa/?hl=ar"
div2.append(newa)



/////////////////////

const btn1 = document.querySelector("#btn1")

const fun1 = ()=>{
    const aa = document.querySelector("#firstText")
    aa.style.color = "green"
}

const fun2 = ()=>{
    const b2 = document.querySelector(".secondText")
    b2.style.color = "yellow"
}
btn1.addEventListener("click",fun1)
btn2.addEventListener("click",fun2)





