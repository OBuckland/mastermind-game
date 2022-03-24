const howToPlayBtn = document.querySelector(".main__play-btn");
const heading = document.querySelector(".main__heading");
const introText = document.querySelector(".main__paragraph");
const mainContainer = document.querySelector(".main");
let currentCharacter = "";
const inputs = [];

// Functions

// HOW TO PLAY PAGE -works
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
        <div id="code-combination">The Code</div>
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
        <div class="input-pegs" id = "input-pegs2">input pegs2</div>
        <div class= "score-section" id = "score-section2">score2</div>
        <div class="input-pegs" id="input-pegs1"></div>
        <div class= "score-section" id="score-section1"></div>
    </div>
    <div class="colour-board">
        <button class="colour-board__colour-btn blue-btn" id ="blue" >Blue</button>
        <button class="colour-board__colour-btn" id="orange">Orange</button>
        <button class="colour-board__colour-btn" id="green">Green</button>
        <button class="colour-board__colour-btn" id="pink">Pink</button>
        <button class="colour-board__colour-btn" id="yellow">Yellow</button>
        <button class="colour-board__colour-btn" id="aqua">Aqua</button>
    </div>
    <div class="check-reset-btn">
        <button id="check-btn">Check</button>
        <button id="delete-btn">Delete</button>
        <button id="reset-btn">Reset</button>
    </div>`;
  const resetBtn = document.querySelector("#reset-btn");
  const checkBtn = document.querySelector("#check-btn");
  const deleteBtn = document.querySelector("#delete-btn");
  const blueBtn = document.querySelector("#blue");
  const orangeBtn = document.querySelector("#orange");
  const input1 = document.querySelector("#input-pegs1");
  const codeReveal =  document.querySelector("#code-combination")


  const colorButtons = document.querySelectorAll(".colour-board__colour-btn");



  // INPUT LENGTH
  const checkInputLength = () => {
    if (userCombination.length > 4) {
      inputLengthBelowMax = false;
    } else {
      inputLengthBelowMax = true;
    }
  };

  // ADD SELECT COLOUR TO INPUT LINE
  // need to figure out how to add the stylings to the input1
  const addColourToGuess = (event) => {
    input1.innerHTML = "";
      let colourChosen = event.target.innerText;
    userCombination.push(colourChosen);
    console.log(userCombination, winningCombination)
    userCombination.map(choice => {
        return input1.innerHTML += `<span class="peg peg-${choice.toLowerCase()}"></span>`;
    })
    if (checkInputLength === true){
        currentCharacter = event.target.innerHTML;
        console.log(currentCharacter);
        // input1.innerHTML += `<span class="">${currentCharacter}</span>`;
        userCombination.push(currentCharacter)
        }
        // input1.innerHTML = userCombination
        
  };

  colorButtons.forEach((colorButton) => {
    colorButton.addEventListener("click", (event) => {
      addColourToGuess(event);
      if(userCombination.length >= 4) {
          userCombination.length = 3;
      }
    });
  });


// ADDING CSS STYLINGS OF PEGS

//   const addBlue = () => {
//       userCombination.innerHTML.style.className.add = "blue-peg-stylings"
//   }

  blueBtn.addEventListener("click", () => {
      
        input1.classList.add("blue-peg-stylings")
        // currentCharacter.innerHTML += addColour
    })


  // DELETE BTN - DELETE LAST INPUT
  //Now doesn't work at all1
  // at the moment this doesn't delete the last input it deletes everything
  const deleteLastInput = () => {
    if ((currentCharacter = deleteBtn)) {
      input1.innerHTML = "";
    } else {
      input1.innerHTML = input1.innerHTML.slice(0, input1.innerHTML.length - 1);
    }
    currentCharacter = deleteBtn;
  };

  deleteBtn.addEventListener("click", deleteLastInput);



  // CODE COMBINATION
  // this currently just gives a random number from the array:

  const possibleColours = ["blue", "orange", "green", "pink", "yellow", "aqua"];
  let winningCombination = [];
  let userCombination = [];

  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * possibleColours.length);
    const randomColour = possibleColours[randomIndex];
    winningCombination.push(randomColour);
  }
  console.log(winningCombination);

//   const getCodeCombination = () => {
//     const randomIndex = Math.floor(Math.random() * possibleColours.length);
//     const randomColour = possibleColours[randomIndex];
//     console.log(randomColour);
//     // colourCode.innerHTML = randomCombination
//   };



  // CHECK CODE COMBINATION - CHECK BTN
  // Check the fist colour against the winning combination, if the colour is in it add a white peg to the score section. Then if the colour is also in the same position say index 2, replace that with a red peg,
  // If the colour is not there nothing happens. 
  //Then I want to loop on to the next colour and do the same 4 times.
  //Once all 4 have been checked I want to move to input2.

  const scoreSection1 = document.querySelector("#score-section1")


  const checkCode = () => {
      if (winningCombination.includes("blue")) {
        console.log("if statement run")
        const scorePeg = document.createElement('span');
        scorePeg.classList.add('white-score-peg');
        scoreSection1.appendChild(scorePeg);
  // scoreSection1.innerHTML.classList.add("white-score-peg");
 }  // else if // here I want to check the position of the peg if correct give red peg
// here if neither conditions met return nothing and move on to next colour. 
}




  checkBtn.addEventListener("click", checkCode);
//   (let i = 0; i < 4; i++)


  // STYLINGS FOR SCORE PEGS
    // .white-score-peg 
    // .red-score-peg 

  

  // GIVE RESULT OF CHECK INTO THE SCORE SECTION
  // if right colour right place give red peg if right colour wrong place give white peg
  // if wrong colour leave blank

  // THEN MOVE TO INPUT2

  //RESET BTN
};
