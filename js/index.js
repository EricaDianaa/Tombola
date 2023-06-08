
let cells=function(cell){
      let createCells=document.getElementById("celle")
for(let i=0;i<15;i++){ 

    let createDiv=document.createElement("div")
createDiv.classList.add("selectorCell")
createDiv.innerHTML=(i+1)
console.log(createDiv)
createCells.appendChild(createDiv) 
}
console.log(createCells)

}
cells()
let cells1=function(cell){
    let createCells1=document.getElementById("celle1")
for(let i=15;i<30;i++){ 

  let createDiv1=document.createElement("div")
createDiv1.classList.add("selectorCell1")
createDiv1.innerHTML=(i+1)
console.log(createDiv1)
createCells1.appendChild(createDiv1) 
}
console.log(createCells1)

}
cells1()
let cells2=function(cell){
    let createCells2=document.getElementById("celle2")
for(let i=30;i<45;i++){ 

let createDiv2=document.createElement("div")
createDiv2.classList.add("selectorCell2")
createDiv2.innerHTML=(i+1)
console.log(createDiv2)
createCells2.appendChild(createDiv2) 
}
console.log(createCells2)

}
cells2()

let cells3=function(cell){
    let createCells3=document.getElementById("celle3")
for(let i=45;i<60;i++){ 

  let createDiv3=document.createElement("div")
createDiv3.classList.add("selectorCell3")
createDiv3.innerHTML=(i+1)
console.log(createDiv3)
createCells3.appendChild(createDiv3) 
}
console.log(createCells3)

}
cells3()
let cells4=function(cell){
    let createCells4=document.getElementById("celle4")
for(let i=60;i<75;i++){ 

  let createDiv4=document.createElement("div")
createDiv4.classList.add("selectorCell4")
createDiv4.innerHTML=(i+1)
console.log(createDiv4)
createCells4.appendChild(createDiv4) 
}
console.log(createCells4)

}
cells4()

let cells5=function(cell){
    let createCells5=document.getElementById("celle5")
for(let i=75;i<90;i++){ 

  let createDiv5=document.createElement("div")
createDiv5.classList.add("selectorCell5")
createDiv5.innerHTML=(i+1)
console.log(createDiv5)
createCells5.appendChild(createDiv5) 
}
console.log(createCells5)

}
cells5()
    let selectorButton=document.querySelector("#invia")
let numberRandom=function(){
selectorButton.addEventListener('click', function(){
  const randomNumber = Math.floor(Math.random()*91)
  let selectedC=document.getElementById("containcells")
selectedC.forEach(n1 => {
    if(n1===randomNumber){
n1.style.color="light-yellow"
    }
    
  });
})
}

numberRandom()