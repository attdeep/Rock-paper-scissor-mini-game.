let userScore = 0;
let compScrore = 0;

// Accesseble part of code 

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");



const genCompChoice = () => {  
const options = ["rock","paper","scissors"];
const randInd = Math.floor(Math.random()* 3);
return options[randInd];
};

// draw game 

const drawGame = () => {
    // console.log("Game Was Draw !!!");
    msg.innerText = "Game was Draw. Play again ";
    msg.style.backgroundColor ="#081b31";

}
// ! winner show

const showWinner = (userWin , userChoice ,compChoice) => {
    if (userWin) { 
        // console.log ("You're the champ!");
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You're the champ! Your ${userChoice} beats ${compChoice} `;
        msg.style.backgroundColor ="Green";
    } else {
        //  console.log("Better luck Next Time! ");
        compScrore++;
        compScorePara.innerText = compScrore;
        msg.innerText = `Better luck Next Time! ${compChoice} beats your ${userChoice} `;
        msg.style.backgroundColor ="Red";

    }
};



const playGame = (userChoice) => {
//  console.log("user choice =",userChoice);
 const compChoice = genCompChoice();
//   console.log("comp choice = ", compChoice);

  if (userChoice === compChoice) {
    drawGame();

  } else {
   let userWin =  true;
   if(userChoice === "rock"){

    userWin = compChoice === "paper" ? false: true;

   }else if (userChoice === "paper"){
    userWin = compChoice === "scissors" ? false : true;

   }else {
    userWin = compChoice === "rock"    ? false: true;
   }
 
   showWinner(userWin ,userChoice ,compChoice);
}


};

choices.forEach ((choice) => {

    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
