
import {useState,useRef,useEffect} from "react"
import Die from "./Die"
import {nanoid} from "nanoid";
import Confetti from "react-confetti"



export default function App() {
  const [dice, setDice] = useState(()=>generateAllNewDice()); 
  const buttonRef = useRef(null)
//   if( dice.every(die=> die.isHeld) && dice.every(die=> die.value === dice[0].value) ){
// console.log("You win");
//   }

const gameWon = dice.every(die=> die.isHeld) && dice.every(die=> die.value === dice[0].value)

useEffect(()=>{
  if(gameWon){
    buttonRef.current.focus()
  }
}, [gameWon])
function generateAllNewDice(){
 
  return new Array(10).fill(0)
  .map(()=>({
    value: Math.ceil(Math.random() * 6),
    isHeld: false,
    id: nanoid()
  }))



}

function rollDice(){
  // setDice(generateAllNewDice())
 if(!gameWon){
  setDice(oldDice=> oldDice.map(die=> 
    die.isHeld ? die : {...die, value: Math.ceil(Math.random() * 6)}
    ))
   
 } else {
  setDice(generateAllNewDice())
 }
}

function isHold(id){
setDice(oldDice=> oldDice.map(die=> 
  die.id === id ?
   {...die, isHeld: !die.isHeld}
   
   : die))
}

const diceElements = dice.map(dieObj => <Die key={dieObj.id} onclick={isHold} id = {dieObj.id}value={dieObj.value} isHeld={dieObj.isHeld}  />)
    return (
      
        <main>
          {gameWon && <Confetti/>}
         
         
          <h1 className="title">Tenzies</h1>
          <p className="instructions"> { gameWon ? "Congratulations! You won! Press 'New Game' to start again."
            : " Roll until all dice are the same. Click each die to freeze it at its current value between rolls."}</p>
            <div className="dice-container">
                {diceElements}
               
            </div>
            <button ref = {buttonRef}className="roll-dice" onClick= {rollDice}>
              {gameWon? "New Game" : "Roll Dice"}</button>
        </main>
    )
}
