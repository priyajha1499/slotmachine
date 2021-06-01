
// let value1 = document.getElementById('value1')
// let value2 = document.getElementById('value2')
// let value3 = document.getElementById('value3')

// let inspeed = document.getElementById('inspeed')

// let values = [
  //   '😁' ,'😃' ,'😋' ,'😍' ,'😎','🤩','😴'
//]

// function getRandomValue() {
//    return values[Math.floor(Math.random() * 7)]
// }


// setInterval(() => {

   //  value1.innerHTML = getRandomValue()
   //  value2.innerHTML = getRandomValue()
   //  value3.innerHTML = getRandomValue()

   
// }, 400)

// inspeed.onchange = function (ev) {

     //document.documentelement = this is ':root' of CSS.

   //  document.documentElement.style.setProperty('--speed',ev.target.value)
// }


let value1 = document.getElementById('value1')
let value2 = document.getElementById('value2')
let value3 = document.getElementById('value3')
let start=document.getElementById('btn');


let values =[
    '🤩','🤐','😎','🤑','🥶','🤡','😡'
]

//Get random values
function getRandomValue(){
    return values[Math.floor(Math.random()*7)] //Math.random() provides any random value // Math.floor convert in into the next nearest integer
}

//Update Animation

function updateAnimation(newSpeed){
    let animationId;
    if (animationId) clearInterval(animationId)

 animationId=setInterval(() => {
       
       value1.innerText = getRandomValue();
       value2.innerText = getRandomValue();
       value3.innerText = getRandomValue();
       
       if(value1.innerText == value2.innerText && value2.innerText == value3.innerText && value3.innerText == value1.innerText){
        window.alert("You won");
        }
},1000 / newSpeed)
}

function gamestart(){ 
    
 let inpuspeed = document.getElementById('inpuspeed')   

inpuspeed.onchange= function(event) {

    //document.documentElement => this is :root of css
    document.documentElement.style.setProperty('--speed',event.target.value)
    
   updateAnimation(event.target.value)

}

}

start.onclick = gamestart();