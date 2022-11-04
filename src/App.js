import React, { useState } from 'react'
import SnakeLadderDisplay from './SnakeLadderDisplay'
import './App.css'
import dicePic from "./dice.jpg"

let playerunique = [];
let playerz = [];
let count = 0;
let dicespin;
let obj = {};
let setposition;

const App = () => {
  const [eachturn, seteachturn] = useState('P1');
  const [playernumber, setplayer] = useState(" ");
  const [finalvalue, setfinalvalue] = useState(0);

  let gamenumber = []
  const snakeArr = [17, 62, 64, 54, 87, 94, 93, 98]
  const snakebite = [7, 19, 60, 34, 36, 75, 73, 79]
  const ladderArr = [4, 9, 21, 28, 51, 80, 72]
  const ladderup = [14, 31, 42, 84, 67, 99, 91]

  for (let i = 100; i >= 1; i -= 10) {
    if (i % 20 === 0) {
      for (let j = i; j > (i - 10); j--) {
        gamenumber.push(j)
      }
    } else {
      for (let j = (i - 9); j <= i; j++) {
        gamenumber.push(j)
      }
    }
  }

  function Playerplaying() {
    let userValue = Number(playernumber)
    for (let i = 1; i <= userValue; i++) {
      playerz.push(`P${i}`)
      obj[`P${i}`] = 0
    }
    playerunique = [...new Set(playerz)]
    console.log(playerunique, "unique");
  }

  function playerRound() {
    if (count === playerunique.length - 1) {
      count = 0
    } else {
      count++
    }
    seteachturn(playerunique[count])
    console.log("playerTurn:", eachturn);
  }

  let random = Math.ceil(Math.random() * 6)

  function playerIndividualRound() {

    dicespin = random
    
    
    if ((obj[`P${count + 1}`] + dicespin) <= 100) {
      if (snakeArr.includes(dicespin + obj[`P${count + 1}`])) {
        setposition = (snakebite[snakeArr.indexOf(obj[`P${count + 1}`] + dicespin)])
        setfinalvalue(setposition)
        obj[`P${count + 1}`] = (setposition)
      } else if (ladderArr.includes(dicespin + obj[`P${count + 1}`])) {
        setposition = (ladderup[ladderArr.indexOf(dicespin + obj[`P${count + 1}`])])
        setfinalvalue(setposition)
        obj[`P${count + 1}`] = (setposition)
      } else {
        setfinalvalue(dicespin + obj[`P${count + 1}`])
        obj[`P${count + 1}`] += (dicespin)
      }
    }
    if (obj[`P${count + 1}`] === 100) {
      alert(`P${count + 1} is Winner`)
    }
    playerRound()
  }
  console.log(obj)

  const setPlayerIncell = (cellNumber, playerDetails) => {

    let playerName = Object.keys(playerDetails)
    let playerPosition = Object.values(playerDetails)
    let finder = -1
    playerPosition.forEach(element => {
      if (cellNumber === element) {
        finder = playerPosition.indexOf(element)
      }
    });
    if (finder != -1) {
      return <span className='playerIcon'>{playerName[finder] + "😀"}</span>
    }
  }

  return (
    <div>
      <div className='gamestart'>
        <div id='gameboard'>{gamenumber.map(value => <div className='cells' id={value}>
          <SnakeLadderDisplay
            number={value}
            snake={snakeArr.includes(value) ? '🐍' : ''}
            ladder={ladderArr.includes(value) ? '❤️' : ''}
            playerEmoji={setPlayerIncell(value, obj)}
          /></div>)}
        </div>
        <div id='subparts'>
          <h3 id="head">Snake And Ladder</h3>
          <input id='input' onChange={(n) => setplayer(n.target.value)} placeholder="Enter No of player" />
          <p><button id='submit' onClick={Playerplaying}>Submit</button></p>
          <h5>playerPosition:{eachturn}: {obj[`P${count + 1}`]}</h5>
          <h5 id='dicespin'>dicespin:{dicespin}</h5>
          <p><img src={dicePic} alt="dice roll" id='click' onClick={playerIndividualRound} /></p>
        </div>
      </div>
    </div>
  );
}
export default App;
