const howToPlayBtn = document.querySelector(".main__play-btn");
const heading = document.querySelector(".main__heading");
const introText = document.querySelector(".main__paragraph");
const mainContainer = document.querySelector(".main")


// Functions 
const howToPlayPage = () => {
    mainContainer.innerHTML = `
    <h2 class = "main__sub-heading-how-to-play">How do you play?</h2>
    <p class = "main__paragraph">
        Selecting a colour will add it to your sequence guess. Each colour will only be used once per sequence.  <br><br>
         Once you have made your guess, hit the check button and the Mastermind will give you feedback. <br><br>
        A red feedback pin indicates that one of your colours is in the sequence and also in the correct position. A white pin indicates you have the right colour but it is in the wrong position.
        The absence of a pin indicates that one of your colours is not in the sequence. <br> <br>
          However, you will not be told which piece of feedback refers to which colour in your sequence.
      </p>
     <p  class= "main__paragraph">
        Through careful logic and deduction you must crack the code by your tenth guess in order to win the game!
     </p>
     <button class="main__play-game-btn">Play</button>
    `;
    const playBtn = document.querySelector(".main__play-game-btn");
    playBtn.addEventListener("click", gamePlayPage);
};

 howToPlayBtn.addEventListener("click", howToPlayPage);

const gamePlayPage = () => {
    mainContainer.innerHTML =`
    <div class="game-container">
        <div class="question-marks">Question Marks</div>
        <div class="input-pegs">1 2 3 4 </div>
        <div class= "score-section">score</div>
        <div class="input-pegs">input pegs</div>
        <div class= "score-section">score</div>
        <div class="input-pegs">input pegs</div>
        <div class= "score-section">score</div>
        <div class="input-pegs">input pegs</div>
        <div class= "score-section">score</div>
        <div class="input-pegs">input pegs</div>
        <div class= "score-section">score</div>
        <div class="input-pegs">input pegs5</div>
        <div class= "score-section">score5</div>
        <div class="input-pegs">input pegs4</div>
        <div class= "score-section">score4</div>
        <div class="input-pegs">input pegs3</div>
        <div class= "score-section">score3</div>
        <div class="input-pegs">input pegs2</div>
        <div class= "score-section">score2</div>
        <div class="input-pegs">input pegs1</div>
        <div class= "score-section">score1</div>
    </div>
    <div class="colour-btn">
        <button class="colour-btn__blue">Blue</button>
        <button class="colour-btn__orange">Orange</button>
        <button class="colour-btn__green">Green</button>
        <button class="colour-btn__pink">Pink</button>
        <button class="colour-btn__red">Red</button>
        <button class="colour-btn__yellow">Yellow</button>
        <button class="colour-btn__purple">Purple</button>
        <button class="colour-btn__aqua">Aqua</button>
    </div>
    <div class="check-reset-btn">
        <button>Check</button>
        <button>Delete</button>
        <button>Reset</button>
    </div>`
}



// howToPlayBtn.addEventListener(("click"), () => {
//     if (howToPlayBtn = howToPlayBtn) {
//         display.innerHTML = gamePlayPage
//     };
// })

// // here I want to write an if statement that if the 
// howToPlayBtn.addEventListener("click",() => {

    
// } gamePlayPage);

// // add an if statement here
