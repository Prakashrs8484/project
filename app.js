let gameSeq=[]
let userSeq=[]

let btns=["yellow","red","purple","green"]

let started=false;
let level=0;

let h2=document.querySelector("h2")

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Started")
        started=true

        levelUp()
    }
})

function gameFlash(btn){
   btn.classList.add("flash")
   setTimeout(function(){
    btn.classList.remove("flash")
   },250)
}
function userFlash(btn){
    btn.classList.add("userFlash")
    setTimeout(function(){
     btn.classList.remove("userFlash")
    },200)
 }

function levelUp(){
    userSeq=[]
    level++
    h2.innerText=`Level ${level}`

    //randon btn choose
    let randIdx=Math.floor(Math.random()*3)
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`)
    gameSeq.push(randColor)

    gameFlash(randBtn)
}

function checkAns(idx){
//    console.log("curr level : ",level)
   
   if(userSeq[idx]===gameSeq[idx]){
    if(userSeq.length==gameSeq.length){
        setTimeout(levelUp,150)
    }
     
   }else{
      h2.innerHTML=`Game Over! Your score was <b>${level}</b> <br> Press any key to start`
      document.querySelector("body").style.backgroundColor="red"
      setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white"
      },150)
      reset()
   }
}
function btnPress(){
    let btn=this
    userFlash(btn)

    userColor=btn.getAttribute("id")
    userSeq.push(userColor)

    checkAns(userSeq.length-1)
}

let allbtns=document.querySelectorAll(".btn")

for(btn of allbtns){ 
    btn.addEventListener("click",btnPress)
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[]
    level=0;
}

