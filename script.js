
const score0 = document.getElementById("score-0");
const current0 = document.getElementById("current-0");
const score1 = document.getElementById("score-1");
const current1 = document.getElementById("current-1");
const roll = document.getElementById("roll");
const dice = document.getElementById("dice");
 


let currentscore = onanimationiterati = 0;

 roll.addEventListener("click", function () {
    let number = Math.trunc(Math.random(1) * 6) + 1;
    dice.src = `dice-${number}.png`;
   if(number !== 1){
     
   }
 })

