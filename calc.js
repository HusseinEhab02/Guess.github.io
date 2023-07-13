let nums =document.querySelectorAll("ul li")
let mult =document.querySelector(".multiply")
let add = document.querySelector(".add")
let sub = document.querySelector(".sub")
let divide = document.querySelector(".divide")
let inputEl = document.querySelector(".input")
let calcs = document.querySelectorAll(".equals > div")
let FirstspanEl=document.querySelector(".spanone")
let SecondspanEl=document.querySelector(".spantwo")
let ThirdspanEl=document.querySelector(".spanthree")
triesEl =document.querySelector(".calculations span")

rsEl=document.querySelector(".res")



FirstspanEl.innerText= 1
SecondspanEl.innerText= 4
ThirdspanEl.innerText= 2

if(FirstspanEl == SecondspanEl || FirstspanEl == ThirdspanEl ){
    FirstspanEl.innerText=Math.floor(Math.random() *10)
}

if(SecondspanEl == FirstspanEl || SecondspanEl== ThirdspanEl ){
    SecondspanEl.innerText=Math.floor(Math.random() *10)
}

if(ThirdspanEl == FirstspanEl || ThirdspanEl== SecondspanEl ){
    ThirdspanEl.innerText=Math.floor(Math.random() *10)
}

nums.forEach(num=>{
    num.addEventListener("click" , (e)=>{
        if(e.target.innerText ===FirstspanEl.innerText){
            FirstspanEl.classList.add("checked")
        }
        else if(e.target.innerText === SecondspanEl.innerText){
            SecondspanEl.classList.add("checked")
        }
        else if(e.target.innerText === ThirdspanEl.innerText){
            ThirdspanEl.classList.add("checked")
        }
        else{
            triesEl.innerText++
        }
        if(FirstspanEl.classList.contains("checked") && SecondspanEl.classList.contains("checked") && ThirdspanEl.classList.contains("checked")){
            congrats = document.createElement("div")
            congratstxt = document.createTextNode("Congrats! You Guessed Right!")
            congrats.appendChild(congratstxt)
            rsEl.appendChild(congrats)
        }
    })
})





