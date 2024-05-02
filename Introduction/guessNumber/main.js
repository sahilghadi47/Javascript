let random = parseInt(Math.random() * 100 + 1);
console.log(random)
const guessNum = document.getElementById('guessNum')
const sub = document.getElementById('sub')
const res = document.getElementById('res')
const prevGuess = document.querySelector('.prevGuess')
const remainGuess = document.querySelector('.remainGuess')
const lowHi = document.querySelector('.lowHi')

let btn = document.createElement('button')

let lastGuess =[];

let count =1;

let playGame = true;

if(playGame){
    sub.addEventListener('click',(event) =>{
        event.preventDefault();
        let guess = parseInt(guessNum.value);
        validGuess(guess);
    })
}

function validGuess(guess){
    if(!(guess)){
        alert('please Enter a Number')
        guessNum.value='';
        
    }else if(guess < 0){
        alert('please Enter a Number greater than 1')
        guessNum.value='';
    }else if(guess >100){
        alert('please Enter a Number less than 100')
        guessNum.value='';
    }else{
        lastGuess.push(guess);
        if(count == 10){
            displayGuess(guess)
            endGame();
            displayMessage(`Game over. Random number was ${random}`)
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
        guessNum.value='';
    }
}
function checkGuess(guess){
    if(guess == random){
        displayMessage(`You guessed it right`)
        endGame()
    }else if( guess < random){
        displayMessage(`number is low`)
    }else if( guess > random){
        displayMessage(`number is high`)
    }
}

function displayGuess(guess){
    guessNum.value='';
    prevGuess.innerHTML += ` ${guess}`;
    remainGuess.innerHTML = `${10 - count}`
    count++;
}

function displayMessage(message){
    lowHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    guessNum.value ='';
    guessNum.setAttribute('disabled','')
    sub.setAttribute('disabled','')
    playGame = false;
    btn.classList.add('btn')
    btn.innerText ='Start a new game'
    res.appendChild(btn)
    newGame()
}

function newGame(){
    const newGame = document.querySelector('.btn') 
    newGame.addEventListener('click', (event) =>{
        random = parseInt(Math.random() * 100 + 1);
        lastGuess =[];
        count =0;
        prevGuess.innerHTML =''
        remainGuess.innerHTML = `${10 - count}`
        playGame=true;
        lowHi.innerHTML=''
        guessNum.removeAttribute('disabled')
        sub.removeAttribute('disabled')
    res.removeChild(btn)
   })
}