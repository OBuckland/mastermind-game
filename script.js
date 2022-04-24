const howToPlayBtn = document.querySelector(".main__play-btn");
const heading = document.querySelector(".main__heading");
const introText = document.querySelector(".main__paragraph");
const mainContainer = document.querySelector(".main");
let currentCharacter = "";
const inputs = [];

// Functions

// HOW TO PLAY PAGE 
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

// GAME PLAY PAGE
const gamePlayPage = () => {
  mainContainer.innerHTML = `
    <div class="nav-btns">
    <button id="home-btn"><i class="fa fa-home"></i></button>
    <button <i class="fa fa-universal-access"></i></button>
    <button id="help-btn"><i class="fa-solid fa fa-question"></i></button>
    <div id="help-btn-modal" class="modal">
    <div class="modal-content">
    <span class="close-help-modal">&times;</span>
    <p>A red pin means one of your selected colours is correct and is in the right position.  <br> <br>  A white pin means one of your colours is correct but is in the wrong position.  <br> <br> No pin means one of the selected colours is not in the combination. </p>
    </div>
    </div>
    </div>
  
    <div id="winning-modal" class="modal">
          <div class="modal-content">
          <span class="close-winning-modal">&times;</span>
          <p>Correct! <br> You guessed the combination!</p>
          </div>
    </div>

    <div class="game-container">
        <div class="input-pegs" id="code-combination"><span class="question-mark-peg peg"><p class="question-mark">?</p></span><span class="question-mark-peg peg"><p class="question-mark">?</p></span><span class="question-mark-peg peg"><p class="question-mark">?</p></span><span class="question-mark-peg peg"><p class="question-mark">?</p></span></div>
        <div class="input-pegs" id="input-pegs10"><span class="peg"></span><span class="peg"></span><span class="peg"></span><span class="peg"></span></div>
        <div class= "score-section" id="score-section10"></div>
        <div class="input-pegs" id="input-pegs9"><span class="peg"></span><span class="peg"></span><span class="peg"></span><span class="peg"></span></div>
        <div class= "score-section" id="score-section9"></div>
        <div class="input-pegs" id="input-pegs8"><span class="peg"></span><span class="peg"></span><span class="peg"></span><span class="peg"></span></div>
        <div class= "score-section" id="score-section8"></div>
        <div class="input-pegs" id="input-pegs7"><span class="peg"></span><span class="peg"></span><span class="peg"></span><span class="peg"></span></div>
        <div class= "score-section" id="score-section7"></div>
        <div class="input-pegs" id="input-pegs6"><span class="peg"></span><span class="peg"></span><span class="peg"></span><span class="peg"></span></div>
        <div class= "score-section" id="score-section6"></div>
        <div class="input-pegs" id="input-pegs5"><span class="peg"></span><span class="peg"></span><span class="peg"></span><span class="peg"></span></div>
        <div class= "score-section" id="score-section5"></div>
        <div class="input-pegs" id="input-pegs4"><span class="peg"></span><span class="peg"></span><span class="peg"></span><span class="peg"></span></div>
        <div class= "score-section" id="score-section4"></div>
        <div class="input-pegs" id="input-pegs3"><span class="peg"></span><span class="peg"></span><span class="peg"></span><span class="peg"></span></div>
        <div class= "score-section" id="score-section3"></div>
        <div class="input-pegs" id="input-pegs2"><span class="peg"></span><span class="peg"></span><span class="peg"></span><span class="peg"></span></div>
        <div class= "score-section" id = "score-section2"></div>
        <div class="input-pegs" id="input-pegs1"> <span class="peg"></span><span class="peg"></span><span class="peg"></span><span class="peg"></span></div>
        <div class= "score-section" id="score-section1"></div>
    </div>
    <div class="user-input-area">
    <div class="colour-board">
        <button class="colour-board__colour-btn" id ="blue">blue</button>
        <button class="colour-board__colour-btn" id="orange">orange</button>
        <button class="colour-board__colour-btn" id="green">green</button>
        <button class="colour-board__colour-btn" id="pink">pink</button>
        <button class="colour-board__colour-btn" id="yellow">yellow</button>
        <button class="colour-board__colour-btn" id="aqua">aqua</button>
        <button class="colour-board__colour-btn" id="red">red</button>
        <button class="colour-board__colour-btn" id="purple">purple</button>
    </div>
    <div class="game-play-btns">
        <button class="game-play-btns__btns" id="check-btn">Check</button>
        <button class="game-play-btns__btns" id="delete-btn">Delete</button>
        <button class="game-play-btns__btns" id="reset-btn">Reset</button>
    </div>
    </div>`;

  const resetBtn = document.querySelector("#reset-btn");
  const checkBtn = document.querySelector("#check-btn");
  const deleteBtn = document.querySelector("#delete-btn");
  const helpBtn = document.querySelector("#help-btn")
  const colorButtons = document.querySelectorAll(".colour-board__colour-btn");


  let winningCombination = [];
  let userCombination = [];
  let currentRow = 1;
  let possibleColours = ["blue", "orange", "green", "pink",  "yellow", "aqua", "purple",  "red"];
  // let possibleColours = [
  //   {colour: "blue", id: 1}, 
  //   {color: "orange", id: 2}, 
  //   {color: "green", id: 3}, 
  //   {color: "pink", id: 4}, 
  //   {color: "yellow", id: 5}, 
  //   {colour: "aqua", id: 6}, 
  //   {colour: "purple", id: 7}, 
  //   {colour: "red", id: 8} ];

    // WINNING CODE COMBINATION
  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * possibleColours.length);
    const randomColour = possibleColours[randomIndex];
    possibleColours.splice(randomIndex, 1)
    winningCombination.push(randomColour);
  }
  console.log(winningCombination);

  // ADD SELECTED COLOUR TO INPUT LINE
    const addColourToGuess = (event, rowId) => {
        const input = document.querySelector(`#input-pegs${rowId}`);
        console.log(rowId);
        input.innerHTML = "";
        let colourChosen = event.target.innerText;
        console.log(colourChosen)
        userCombination.push(colourChosen);
        userCombination.map(colour => {
            return (input.innerHTML += `<span class="peg peg-${colour.toLowerCase()}"></span>`);
        });
    };


    colorButtons.forEach((colorButton) => {
        colorButton.addEventListener("click", event => {
            if(userCombination.length < 4 && userCombination.includes(event.target.innerText) == false) {
            addColourToGuess(event, currentRow);
            }
        });
    });
  
    // Check code function 
    const checkCode = () => {
      let gameContainer = document.querySelector(".game-container")
      let scoreSection = document.querySelector(`#score-section${currentRow}`);

      let winningModal = document.querySelector("#winning-modal");
      let closeWinningModal = document.querySelector(".close-winning-modal");
      const winningBtn = document.querySelector("#winning-btn")
      

      if (userCombination.length == 4 && scoreSection.innerHTML == "") {
        if (winningCombination[0].colour == userCombination[0]) {
          scoreSection.innerHTML += `<span class="score-peg-red"></span>`
        } else if (winningCombination.includes(userCombination[0].colour)) {
           scoreSection.innerHTML += `<span class="score-peg-white"></span>`}

        if (winningCombination[1]  == userCombination[1].colour) {
          scoreSection.innerHTML += `<span class="score-peg-red"></span>`
        } else if (winningCombination.includes(userCombination[1].colour)) {
          scoreSection.innerHTML += `<span class="score-peg-white"></span>`}

        if (winningCombination[2] == userCombination[2].colour) {
          scoreSection.innerHTML += `<span class="score-peg-red"></span>`
        } else if (winningCombination.includes(userCombination[2].colour)) {
          scoreSection.innerHTML += `<span class="score-peg-white"></span>`}

        if (winningCombination[3] == userCombination[3].colour) {
           scoreSection.innerHTML += `<span class="score-peg-red"></span>`
        } else if (winningCombination.includes(userCombination[3].colour)) {
          scoreSection.innerHTML += `<span class="score-peg-white"></span>`}
         }

         // WINNING MODAL
         if (
          (winningCombination[0] == userCombination[0].toLowerCase()) && 
          (winningCombination[1]  == userCombination[1].toLowerCase()) && 
          (winningCombination[2]  == userCombination[2].toLowerCase()) && 
          (winningCombination[3]  == userCombination[3].toLowerCase())  )
           {
            winningModal.style.display = "block";
          console.log("you win")
        }

         if (userCombination.length == 4) {
          currentRow += 1;
          userCombination = [];
         }

       console.log(userCombination)
    };

    checkBtn.addEventListener("click", checkCode);

  // DELETE BTN
  const deleteLastInput = rowId => {
    // prevent function from running if row is empty
    if (userCombination.length === 0) return;
    console.log("delete button clicked", userCombination);
    // grab all the current pegs inside the current row
    const currentInputs = document
        .querySelector(`#input-pegs${rowId}`)
        .querySelectorAll(".peg");
    // with each delete button click - remove the choice from userCombination
    userCombination.pop();
    // grab last peg in the current row
    const lastInput = currentInputs[currentInputs.length - 1];
    // remove this lastInput from HTML
    lastInput.parentNode.removeChild(lastInput);
};

deleteBtn.addEventListener("click", () => {
    deleteLastInput(currentRow);
});

  //RESET BTN
resetBtn.addEventListener("click", gamePlayPage)

//HELP BTN
let helpModal = document.querySelector(".modal");
let closeHelpModal = document.querySelector(".close-help-modal");

helpBtn.addEventListener("click", () => {
  helpModal.style.display = "block";
})

closeHelpModal.addEventListener("click", () => {
  helpModal.style.display = "none";
}) 

//HOME BTN
const homeBtn = document.querySelector("#home-btn");

homeBtn.addEventListener("click", () => {
 window.location.href = "http://127.0.0.1:5501/index.html"
})
};
