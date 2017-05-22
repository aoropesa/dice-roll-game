const dieContainer = document.querySelector('#die')
const roll = document.querySelector('#roll')
const player1 = document.querySelector('#player1')
const player2 = document.querySelector('#player2')
const winnerCircle = document.querySelector('#winner-circle')
const winnerCirclePosition = winnerCircle.getBoundingClientRect()

player1.name = 'Hillary'
player2.name = 'Trump'
let rollNum = null
let isPlayer1Turn = (Math.random() > 0.5)? true:false
let player1sum = 0
let player2sum = 0
let currentSum;

function resetGame() {
   rollNum = null
   isPlayer1Turn = (Math.random() > 0.5)? true:false
   player1sum = 0
   player2sum = 0

   player1.style.top = '160px'
   player1.style.left = '10px'
   player1.style.height = '70px'
   player1.style.width = '70px'
   player1.style.borderRadius = '0px'

   player2.style.top = '250px'
   player2.style.left = '10px'
   player2.style.height = '70px'
   player2.style.width = '70px'
   player2.style.borderRadius = '0px'
}

dieContainer.addEventListener('click', function(){
  if( player2sum > 10 || player2sum > 10 ) return false;
  die.setAttribute('src', 'img/Dodecahedron3.gif')

  roll.textContent = '?'
  rollNum = Math.floor(Math.random() * 10) + 1
  let currentPlayer = player1
  if(isPlayer1Turn === false){
    currentPlayer = player2
    player2sum += rollNum
    currentSum = player2sum
  }else {
    player1sum += rollNum
    currentSum = player1sum
  }
  if(currentSum > 10){
    setTimeout(function(){
      currentPlayer.style.top = winnerCirclePosition.top + 'px'
      currentPlayer.style.left = winnerCirclePosition.left + 'px'
      currentPlayer.style.height = winnerCirclePosition.height + 'px'
      currentPlayer.style.width = winnerCirclePosition.width + 'px'
      currentPlayer.style.borderRadius = '100%'
      setTimeout(function(){
        alert(`${currentPlayer.name} is the winner!`)
        alert('Ready to play again?')
        resetGame()
      },400)
    },1800)
    return false;
  }
  const tile = document.querySelector(`#tile${currentSum }`)
  const tilePosition = tile.getBoundingClientRect()
  setTimeout(function(){
      roll.textContent = rollNum

      currentPlayer.style.top = tilePosition.top + 'px'
      currentPlayer.style.left = tilePosition.left + 'px'
      isPlayer1Turn = !isPlayer1Turn
    },1800)

  })
