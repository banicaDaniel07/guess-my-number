
// Again button
let againBtn = document.querySelector('.again');

//body 
let bodyHTML = document.getElementsByTagName('body')[0];

// winner
let contentTitle = document.querySelector('.content-title');

// Hidden number
let contentShow = document.querySelector('.content-show');


// User inputs
let guess = document.querySelector('#guess');
let changeCheckBtn = document.querySelector('.change-check')


// Score
let changeDetail = document.querySelector('.change-detail');
let changeScoreNumber = document.querySelector('.change-score-number');
let chnageHighscoreNumber = document.querySelector('.change-highscore-number');

// Initializate the values
let randomValue = randomNumber();
playing = true;
let curentScore = 20;
let highScore = 0;


function randomNumber(){
  return Math.trunc((Math.random() * 20) + 1)
}


console.log(`First number test ${randomValue}`);

changeCheckBtn.addEventListener('click', function(){
  let guessValue = Number(guess.value);
  if(playing) {
    
    if( guessValue < 1 || guessValue > 20) {
      changeDetail.innerHTML = 'Between 1 and 20';
    } else {

      if(guessValue === randomValue) {
        if(curentScore > highScore) {
          highScore = curentScore;
          chnageHighscoreNumber.textContent = curentScore;
        }
          playing = false;
          contentTitle.textContent = 'Winner!!';
          bodyHTML.style.backgroundColor = 'orangered';
          contentShow.textContent = guessValue;
          guess.value = '';

          changeDetail.textContent = 'Perfect';

      } else {
          changeDetail.textContent = guessValue > randomValue ?'To High' : 'To Low';
          curentScore--;
          changeScoreNumber.textContent = curentScore;
      }
    }
  }
});


againBtn.addEventListener('click', function(){
    bodyHTML.style.backgroundColor = '#222';
    contentTitle.textContent = 'Guess My Number!';
    playing = true;
    curentScore = 20;
    changeScoreNumber.textContent = curentScore;
    changeDetail.textContent = 'Start guessing!';
    contentShow.textContent = '?';
    randomValue = randomNumber();
    guess.value = '';

    console.log(`Again random number is ${randomValue}`);
});