'use strict';

let ispressed=false
let x
let y
let x_start
let y_start

document.addEventListener('mousedown', e => {
 ispressed=true
});

document.addEventListener('mouseup', e => {
   ispressed=false
   x=NaN 
   y=NaN
});


 let canvas = document.getElementById("myCanvas")
     canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
let dist=0


let ctx = canvas.getContext("2d");
document.addEventListener('mousemove', e => {
  x_start=x
  y_start=y
   
   x=e.pageX;
   y=e.pageY

   //console.log(x, x_start)
   document.getElementById('coords').innerHTML=`x:${x} y:${y}`
  
 if(ispressed ){
  

ctx.beginPath();
ctx.lineWidth = 1
ctx.strokeStyle = 'orange'
ctx.moveTo(x, y);
ctx.lineTo(x_start, y_start);
ctx.stroke();

   dist+=route(x_start-x, y_start-y)
   myFunction2(x_start, y_start,x,y)
   x_start=x
   y_start=y
   //console.log(dist)
   //console.log(route(x_start-x, y_start-y))
   document.getElementById('distance').innerHTML=Math.round(dist)
 }

});


function route(x,y) {
  return Math.sqrt((x**2)+(y**2))
}


function myFunction2(x_start, y_start,x,y){
  let div = document.createElement('drawdiv')
  div.innerHTML=`<svg height="100%" width="100%" 
  style="position: absolute; left:0; top:0;">
  <line x1="${x_start}" y1="${y_start}" 
  x2="${x}" y2="${y}" 
  style="stroke:rgb(255,0,0);stroke-width:5"></line> `
  document.body.append(div)
  setTimeout(function(){
  div.remove()
}, 1500)
}



let clear=document.getElementById('Clear')
clear.addEventListener('click', function()
  {ctx.clearRect(0, 0, window.innerWidth, window.innerHeight) }
  )