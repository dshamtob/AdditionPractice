//Initialization
var lives = 3;
var score = 0;
var questionNumber = 0;
var buttonList = ["topLeftBtn", "topRightBtn", "bottomLeftBtn", "bottomRightBtn"];
var correctButton;

//Updating Page Function
function updateScreen(){
  var addend1 = randomNumber(1,999);
  var addend2 = randomNumber(1,999);
  setText("questionTitle", "" +addend1 + " + " +addend2 + " ="); //Sets question title
  
  //Chooses correct button randomly
  correctButton = buttonList[randomNumber(0,3)];
  setText(correctButton, "" + (addend1 + addend2));
  
  //Sets the rest of the button values
  for (var i = 0; i < 4; i++) {
    if(buttonList[i]!=correctButton){
      setText(buttonList[i], "" +randomNumber(2,2000));
    }
  }
  
  //Updates question number
  questionNumber++;
  setText("questionNumberLabel", "" + questionNumber);
  
}

//Check Correct Function
function checkCorrect(button){
  if(correctButton == button){
    //Increases score
    score++;
    setText("scoreNumberLabel", "" + score);
    
    updateScreen();
  }
  else if(lives != 1){
    //Decreases lives
    lives--;
    setText("livesNumberLabel", "" + lives);
  }
  else { //Game over config
    setScreen("gameOverScreen");
    setText("finalScoreNumberLabel", "" + score);
  }
}

//Start Screen
onEvent("startBtn", "click", function() {
  updateScreen();
  setScreen("questionScreen");
});

//Question Screen buttons
onEvent("bottomRightBtn", "click", function() {
  checkCorrect("bottomRightBtn");
});
onEvent("topRightBtn", "click", function() {
  checkCorrect("topRightBtn");
  
});
onEvent("topLeftBtn", "click", function() {
  checkCorrect("topLeftBtn");
  
});
onEvent("bottomLeftBtn", "click", function() {
  checkCorrect("bottomLeftBtn");
  
});



//Game Over Screen
onEvent("playAgainButton", "click", function() {
  setScreen("welcomeScreen");
  
  //Reset lives, score, and question number
  lives = 3;
  score = 0;
  questionNumber = 0;
  setText("livesNumberLabel", "" + lives);
  setText("scoreNumberLabel", "" + score);
});
