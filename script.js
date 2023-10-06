let timer=10;
let globalrn=0;
let score=0;
function makeBubble(){
    let clutter=" ";
for(let i=1;i<=168;i++){
    clutter+=` <div class="bubble">${Math.floor(Math.random()*10)+1}</div>`;

}
document.querySelector("#pbtm").innerHTML=clutter;
};

function runTimer(){
    let timeout= setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#runtime").innerHTML=timer;
        }else{
            clearInterval(timeout);
            document.querySelector("#pbtm").innerHTML=`Game Over`;
        }

    },1000)
}

function hitrn(){
     globalrn=Math.floor(Math.random()*10)+1;
    document.querySelector("#hitval").textContent=globalrn;
}
function increaseScore(){
   score+=10;
   document.querySelector("#scoreval").textContent=score;
}
document.querySelector("#pbtm").addEventListener("click",function(dets){
      let clickedNum=Number(dets.target.textContent);
      if(clickedNum==globalrn);
      increaseScore();
      makeBubble();
      hitrn();
})
runTimer();
makeBubble();
hitrn();

