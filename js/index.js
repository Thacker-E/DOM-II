// Your code goes here

let navlink= 
document.querySelector('.nav-link')
navlink.addEventListener('click',function(event){ 
    event.target.textContent='click count:'+ event.detail;
},false);



  let over=document.querySelector('.ER')
.addEventListener('mouseover',function(event){
    event.target.textContent='Eleanor Rutabaga';
})
           
let click2=document.querySelector('.DP')
.addEventListener('dblclick',function(event){
    event.target.textContent='David S. Pumpkins!';
})

let scroll=
document.addEventListener('scroll', function(){
    document.body.style.background="pink";
})

let click=
document.addEventListener('click', function(event){
    document.getElementsByClassName('.SPIN').style.transform='rotate(360deg)';
})

let leave=
document.addEventListener("mouseout", function(event){
    event.target.style.color='orange';
},500);




