'use strict'
const number = Math.trunc(Math.random() * 20 ) + 1;
let score=20;
let highscore=0;
document.querySelector('.score').textContent=score;
let displayMsg=function(message){
    document.querySelector('.message').textContent=message;
};

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.number').value);
    console.log(guess,typeof guess );
    if(!guess){
        document.querySelector('.message').textContent='Not A Number';
    }

   else if(guess !=number){
        if(score >1){
             document.querySelector('.message').textContent= guess >number? ' 👆🏿To high !!':'👇🏿To Low';
             score--;
             document.querySelector('.score').textContent=score;
        }
        else{
            displayMsg('YOU LOST !🤷🏿👎🏿');
            document.querySelector('.score').textContent=0;
            document.querySelector('.heading').textContent='PRESS AGAIN ! TO PLAY ONE MORE TIME ';

        }
    }else if (guess===number){
        document.querySelector('.message').textContent ='🕺🏿🥳Correct Guess!!';
        document.querySelector('.secretNo').textContent=number;
        document.querySelector('.body').style.backgroundColor = "lightgreen";
        if(score>highscore){
           
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;
        }
        
    }
    // else if(guess>number){
    //     displayMsg('To high !!');
    //     score--;
    //     document.querySelector('.score').textContent=score;
    // }

    // else if(guess<number){
    //     displayMsg('To Low');
    //     score--;
    //     document.querySelector('.score').textContent=score;
    // } 
  });

document.querySelector('.btn').addEventListener('click', function(){
    const number = Math.trunc(Math.random() * 20 ) + 1;
    score=20;
    displayMsg('Start guessing...');
    document.querySelector('.secretNo').textContent=number;
    document.querySelector('.secretNo').textContent = '?';
    document.querySelector('.number').value ='';
    document.querySelector('.score').textContent =score;
    document.querySelector('body').style.backgroundColor='#1a0500';
    document.querySelector('.heading').textContent='Guess My Number !! ';

   
    

});
