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
    <div class="game-container">
        <div class="input-pegs" id="code-combination"></span><span class="peg"></span><span class="peg"></span><span class="peg"></span><span class="peg"></span></div>
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
        <div class="input-pegs" id="input-pegs1"><span class="peg"></span><span class="peg"></span><span class="peg"></span><span class="peg"></span></div>
        <div class= "score-section" id="score-section1"></div>
    </div>
    <div class="colour-board">
        <button class="colour-board__colour-btn" id ="blue">Blue</button>
        <button class="colour-board__colour-btn" id="orange">Orange</button>
        <button class="colour-board__colour-btn" id="green">Green</button>
        <button class="colour-board__colour-btn" id="pink">Pink</button>
        <button class="colour-board__colour-btn" id="yellow">Yellow</button>
        <button class="colour-board__colour-btn" id="aqua">Aqua</button>
        <button class="colour-board__colour-btn" id="red">Red</button>
        <button class="colour-board__colour-btn" id="white">White</button>
    </div>
    <div class="check-reset-btn">
        <button id="check-btn">Check</button>
        <button id="delete-btn">Delete</button>
        <button id="reset-btn">Reset</button>
    </div>`;
  const resetBtn = document.querySelector("#reset-btn");
  const checkBtn = document.querySelector("#check-btn");
  const deleteBtn = document.querySelector("#delete-btn");
  // const codeReveal =  document.querySelector("#code-combination")
  const colorButtons = document.querySelectorAll(".colour-board__colour-btn");


  let winningCombination = [];
  let userCombination = [];
  let currentRow = 1;
  const possibleColours = ["blue", "orange", "green", "pink", "yellow", "aqua", "red", "white"];

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
      // if (userCombination == winningCombination) {
      //   gameContainer.innerHTML += `<span class="modal" id="modal-dialog"></span>`
      // }
      if (userCombination.length == 4 && scoreSection.innerHTML == "") {
        if (winningCombination[0] == userCombination[0].toLowerCase()) {
          scoreSection.innerHTML += `<span class="score-peg-red"></span>`
        } else if (winningCombination.includes(userCombination[0].toLowerCase())) {
           scoreSection.innerHTML += `<span class="score-peg-white"></span>`}

        if (winningCombination[1]  == userCombination[1].toLowerCase()) {
          scoreSection.innerHTML += `<span class="score-peg-red"></span>`
        } else if (winningCombination.includes(userCombination[1].toLowerCase())) {
          scoreSection.innerHTML += `<span class="score-peg-white"></span>`}

        if (winningCombination[2] == userCombination[2].toLowerCase()) {
          scoreSection.innerHTML += `<span class="score-peg-red"></span>`
        } else if (winningCombination.includes(userCombination[2].toLowerCase())) {
          scoreSection.innerHTML += `<span class="score-peg-white"></span>`}

        if (winningCombination[3] == userCombination[3].toLowerCase()) {
           scoreSection.innerHTML += `<span class="score-peg-red"></span>`
        } else if (winningCombination.includes(userCombination[3].toLowerCase())) {
          scoreSection.innerHTML += `<span class="score-peg-white"></span>`}
         }
         if (userCombination.length == 4) {
          currentRow += 1;
          userCombination = [];
         }
    };
    console.log(userCombination)

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
};
