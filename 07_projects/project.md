https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html

###   PROJECT 1   =>  COLOR CHANGE

```javascript 

const buttons = document.querySelectorAll('.button') // id
const  body = document.querySelector('body')  //  tagname

//    event ko function me le sakte hai
//  nodelist forEach loop laga skate hai, but HTMLcollection pe nai laga sakte
buttons.forEach(function(button){
  console.log(button)
  button.addEventListener('click', function(chai){
    console.log(chai)
    console.log(chai.target)
    if(chai.target.id === 'grey'){
      body.style.backgroundColor = chai.target.id  // or = 'grey'
    }
    else if(chai.target.id === 'white'){
      body.style.backgroundColor = chai.target.id  // or = 'white'
    }
    else if(chai.target.id === 'blue'){
      body.style.backgroundColor = chai.target.id  // or = 'blue'
    }
    if(chai.target.id === 'purple'){
      body.style.backgroundColor = chai.target.id  // or = 'puple'
    }
    if(chai.target.id === 'yellow'){
      body.style.backgroundColor = chai.target.id // or 'yellow'
    } 

  })
})

```

###   PROJECT 2  =>   BMI CALCULATOR

```javascript



const form = document.querySelector('form'); //  tag
//  form submit hota hai to ya 'post' type se hota hai ya 'get' type se

// this usecase will give you empty value
// const height = parseInt(document.querySelector('.height').value)

form.addEventListener('submit', function (chai) {
  chai.preventDefault();

  const height = parseInt(document.querySelector('#height').value);   //  id  #
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Plese give a valid height ${height}`;
  }else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Plese give a valid weight ${weight}`;
  }
  else{
    const BMI = (weight / ((height*height)/10000)).toFixed(2)
    // show the result
    results.innerHTML = `<span>${BMI}</span>`;
    if(BMI < 18.6){
      message.innerHTML = `<span>You are Under Weight </span>`
    }
    else if(BMI>18.6 && BMI <24.9){
      message.innerHTML = `<span>You weight is normal </span>`
    }
    else{
      message.innerHTML =  `<span>You are Overweight</span>`
    }
  }

});


```




###    PROJECT 3 =>  DIGITAL CLOCK    


```javascript


const clock =  document.getElementById("clock")
// const clock =  document.querySelector("#clock")   // both are same

setInterval(function(){
  let date = new Date();
  // console.log(date.toLocaleTimeString())
  clock.innerHTML = date.toLocaleTimeString()
}, 1000)



```

###  PROJECT 4 =>  GUESS THE NUMBER


```JAVASCRIPT


let randomNumber = parseInt(Math.random()*100+1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guesslot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p= document.createElement('p')

let prevGuess = []
let numberGuess = 1

let playGame = true;

if(playGame){
  submit.addEventListener('click', function(chai){
    chai.preventDefault()  //   value server pe na jaye to usko rokne ke liye
    const guess = parseInt(userInput.value)
    console.log(guess);
    validateGuess(guess)
  })
}

function validateGuess(guess){
  //
  if (isNaN(guess)) {
    alert('Please enter a valid number')
  }
  else if(guess < 1){
    alert('Please enter your guess between 1 to 100')
  }else if(guess >100){
    alert('Please enter your guess between 1 to 100')
  }else{
    prevGuess.push(guess)
    if(numberGuess===11){
      displayGuess(guess)
      displayMessage(`Game Over. Random number was ${randomNumber}`)
      endGame()
    }else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  //
  if(guess === randomNumber){
    displayMessage(`You guessed it right`)
    endGame();
  }
  else if(guess < randomNumber){
    displayMessage(`You guess is too low`)

  }
  else if(guess > randomNumber){
    displayMessage(`You guess is too high`)
  }
}

function displayGuess(guess){
  //
  userInput.value ='';
  guesslot.innerHTML += `${guess}, `  //  storing previous guesses
  numberGuess++;
  remaining.innerHTML = `${11 - numberGuess}`
}

function displayMessage(message){
  //
  lowOrHigh.innerHTML =  `<h2>${message}</h2>`
}

function endGame(){
  userInput.value = ''
  userInput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`
  startOver.appendChild(p)
  playGame = false
  newGame()
}


function newGame(){
//
  const newGameButton = document.querySelector('#newGame')  
  newGameButton.addEventListener('click', function(chai){
    randomNumber = parseInt(Math.random()*100+1)
    prevGuess = []
    numberGuess = 1
    guesslot.innerHTML = ''
    remaining.innerHTML = `${11 - numberGuess}`
    userInput.removeAttribute('disabled')

    startOver.removeChild(p)
    playGame = true
  })
}

```



###  PROJECT 5  =>  COLOR CHANGE

```JAVASCRIPT

const insert = document.getElementById('insert')  ///  taking reference

window.addEventListener('keydown', (chai)=>{
  insert.innerHTML= `
  <div class="color">
  <table>
    <tr>
      <th>Key</th>
      <th>Keycode</th> 
      <th>Code</th>
    </tr>
    <tr>
      <td>${chai.key === ' ' ? 'Space' : chai.key}</td>  
      <td>${chai.keyCode}</td> 
      <td>${chai.code}</td>
    </tr>
    
  </table>
  </div>
  `
})



//   if space key is pressed then show space, this condition is ensuring that <td>${chai.key === ' ' ? 'Space' : chai.key}</td> 

```



###   PROJECT 6 =>  PRESS ANY KEY

``` JAVASCRIPT

// generate a random color

const randomColor = function(){
  const hex = '012345678ABCDEF'
  let color = '#'
  for(let  i= 0; i<6; i++){
    color += hex[Math.floor(Math.random() * 10)];
  }
  return color;
}
// console.log(randomColor());


//   for starting 
let interval;             //    declaring in global scope for accessing in stopChangingColor
const startChangingColor = function(){
  if(!interval){       //   saftey check  for edge case ,   for understanding it is linked to "null"
    interval = setInterval(changeBg, 1000)
  }

  function changeBg(){
    document.body.style.backgroundColor = randomColor()
  }
}




//   for stoping
const stopChangingColor = function (){
  clearInterval(interval);
  interval = null;
}



//    taking reference of "start"  and  "stop"
const start = document.querySelector('#start').addEventListener('click', startChangingColor)
const stop = document.querySelector('#stop').addEventListener('click', stopChangingColor)

```