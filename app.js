const die = document.querySelector('#die')
const roll = document.querySelector('#roll')
const player1 = document.querySelector('#player1')
const player2 = document.querySelector('#player2')

let rollNum = null
let isPlayer1Turn = true

die.addEventListener('click', function(){
  die.setAttribute('src', 'img/Dodecahedron3.gif')

  roll.textContent = '?'
  rollNum = Math.floor(Math.random() * 10) + 1
  const tile = document.querySelector(`#tile${rollNum}`)
  const tilePosition = tile.getBoundingClientRect()
  setTimeout(function(){
      roll.textContent = rollNum
      let currentPlayer = player1
      if(isPlayer1Turn === false){
        currentPlayer = player2
      }
      currentPlayer.style.top = tilePosition.top + 'px'
      currentPlayer.style.left = tilePosition.left + 'px'
      isPlayer1Turn = !isPlayer1Turn
    },1800)

  })
