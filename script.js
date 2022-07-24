const player0 = document.querySelector(".player-0");
const player1 = document.querySelector(".player-1");
const current0 = document.getElementById("current-0");
const current1 = document.getElementById("current-1");
const roll = document.getElementById("roll");
const dice = document.getElementById("dice");
const holddice = document.getElementById("holddice");
const reset = document.getElementById("reset");


let activePlayer = 0;
// current0.innerHTML = 0;
// current1.innerHTML = 0;
let currentscore = 0;
let score = [0, 0]
// this is use when a player win after then the buttons will stop

let playing = true;


let switchplayer = function () {
    // changing the player
    document.getElementById(`current-${activePlayer}`).innerHTML = 0
    currentscore = 0;
    //  selecting the player
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0.classList.toggle("activebg");
    player1.classList.toggle("activebg");

}

// click to roll dice event 
roll.addEventListener("click", function () {
    if (playing) {

        let number = Math.trunc(Math.random(1) * 6) + 1;
        dice.src = `dice-${number}.png`;
        if (number !== 1) {
            currentscore += number;

            document.getElementById(`current-${activePlayer}`).innerHTML = currentscore;

        }
        else {
            switchplayer();
        }
    }
})



// hold button to add score
holddice.addEventListener("click", () => {
    if (playing) {

        // score[] store the current store by adding all
        score[activePlayer] += currentscore;
        document.getElementById(`score-${activePlayer}`).innerHTML = score[activePlayer];

        if (score[activePlayer] >= 20) {
            playing = false;
            document.querySelector(`.player-${activePlayer}`).classList.add("winbg");
            document.querySelector(`.player-${activePlayer}`).classList.remove("activebg");
        }
        else {

            switchplayer();
        }
    }
})

//  this is reset button of the game

 reset.addEventListener("click",  () => {
    playing = true;
    player0.classList.remove("winbg");
    player1.classList.remove("winbg");
    player0.classList.add("activebg");
    current0.innerHTML = 0;
    current1.innerHTML = 0;
    currentscore = 0;
    activePlayer = 0;
    score = [0, 0];
    document.getElementById("score-0").innerHTML = 0;
    document.getElementById("score-1").innerHTML = 0;
 })