const howToPlayBtn = document.querySelector(".main__play-btn");
const heading = document.querySelector(".main__heading");
const introText = document.querySelector(".main__paragraph");
const mainContainer = document.querySelector(".main");

// HOW TO PLAY PAGE 
const howToPlayPage = () => {
  mainContainer.innerHTML = `
    <h1 class = "main__heading">How do you play?</h2>
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
        <button id="universal-access" <i class="fa fa-universal-access"></i></button>
        <button id="help-btn"><i class="fa-solid fa fa-question"></i></button>
    </div>
  
    <div class="modal" id="help-btn-modal">
        <span class="close-help-modal">&times;</span>
        <p>A red pin means one of your selected colours is correct and is in the right position.  <br> <br>  A white pin means one of your colours is correct but is in the wrong position.  <br> <br> No pin means one of the selected colours is not in the combination. </p>
    </div>

    <div class="modal" id="winning-modal" >
        <p id="winning-modal-text">Correct!</p> 
        <p> You cracked the code!</p>
        <button class="home-replay-btns" id="play-again-btn">Replay</button>
        <button class="home-replay-btns" id="home-btn-within-modal">Home</button>
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
    </div>
    
    <div class="modal" id="reset-modal"> 
        <p>Are you sure you want to reset the game?</p> <button class= "reset-yes-no-btns" id="yes-btn">Yes</button> <button class= "reset-yes-no-btns" id="no-btn">No</button>
    </div>`;

  const resetBtn = document.querySelector("#reset-btn");
  const checkBtn = document.querySelector("#check-btn");
  const deleteBtn = document.querySelector("#delete-btn");
  const helpBtn = document.querySelector("#help-btn");
  const colorButtons = document.querySelectorAll(".colour-board__colour-btn");
  const playAgain = document.querySelector("#play-again-btn");
  const homeBtnWithinModal = document.querySelector("#home-btn-within-modal")
  const helpModal = document.querySelector(".modal");
  const closeHelpModal = document.querySelector(".close-help-modal");
  const homeBtn = document.querySelector("#home-btn");
  const resetModal = document.querySelector("#reset-modal")
  const yesBtn = document.querySelector("#yes-btn")
  const noBtn = document.querySelector("#no-btn")

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

  // FUNCTIONS
  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * possibleColours.length);
    const randomColour = possibleColours[randomIndex];
    possibleColours.splice(randomIndex, 1)
    winningCombination.push(randomColour);
  }

  console.log(winningCombination);

  const addColourToGuess = (event, rowId) => {
    const input = document.querySelector(`#input-pegs${rowId}`);
    input.innerHTML = "";
    let colourChosen = event.target.innerText;
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
  

  const checkCode = () => {
    let scoreSection = document.querySelector(`#score-section${currentRow}`);
    let winningModal = document.querySelector("#winning-modal");
      
      if (userCombination.length == 4 && scoreSection.innerHTML == "") {
        if (winningCombination[0] == userCombination[0]) {
          scoreSection.innerHTML += `<span class="score-peg-red"></span>`
        } else if (winningCombination.includes(userCombination[0])) {
           scoreSection.innerHTML += `<span class="score-peg-white"></span>`}

        if (winningCombination[1]  == userCombination[1]) {
          scoreSection.innerHTML += `<span class="score-peg-red"></span>`
        } else if (winningCombination.includes(userCombination[1])) {
          scoreSection.innerHTML += `<span class="score-peg-white"></span>`}

        if (winningCombination[2] == userCombination[2]) {
          scoreSection.innerHTML += `<span class="score-peg-red"></span>`
        } else if (winningCombination.includes(userCombination[2])) {
          scoreSection.innerHTML += `<span class="score-peg-white"></span>`}

        if (winningCombination[3] == userCombination[3]) {
           scoreSection.innerHTML += `<span class="score-peg-red"></span>`
        } else if (winningCombination.includes(userCombination[3])) {
          scoreSection.innerHTML += `<span class="score-peg-white"></span>`}
      }

      if (
          (winningCombination[0] == userCombination[0].toLowerCase()) && 
          (winningCombination[1]  == userCombination[1].toLowerCase()) && 
          (winningCombination[2]  == userCombination[2].toLowerCase()) && 
          (winningCombination[3]  == userCombination[3].toLowerCase())  )
           { winningModal.style.display = "block"; }

      if (userCombination.length == 4) {
          currentRow += 1;
          userCombination = [];
        }
    };

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
   
//BUTTONS & EVENT LISTENERS
deleteBtn.addEventListener("click", () => {
  deleteLastInput(currentRow);
});

checkBtn.addEventListener("click", checkCode);

resetBtn.addEventListener("click", () => {
  resetModal.style.display = "block";
})

homeBtn.addEventListener("click", () => {
  window.location.href = "http://127.0.0.1:5501/index.html"
 })

yesBtn.addEventListener("click", gamePlayPage);

noBtn.addEventListener("click", () => {
  resetModal.style.display ="none";
})

helpBtn.addEventListener("click", () => {
  helpModal.style.display = "block";
})

closeHelpModal.addEventListener("click", () => {
  helpModal.style.display = "none";
}) 

homeBtnWithinModal.addEventListener("click", () => {
  window.location.href = "http://127.0.0.1:5501/index.html"
})

playAgain.addEventListener("click", gamePlayPage);

};