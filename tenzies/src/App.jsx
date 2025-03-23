
import {useState} from "react"
import Die from "./Die"




export default function App() {
  const [dice, setDice] = useState(generateAllNewDice()); 
function generateAllNewDice(){
 
  const randomRolledNumber = Array.from({length:10},()=>Math.floor(Math.random() *6 )+ 1);

  return randomRolledNumber;



}

function rollDice(){
  setDice(generateAllNewDice())
}

const diceElements = dice.map(num => <Die value={num} />)
    return (
        <main>
            <div className="dice-container">
                {diceElements}
               
            </div>
            <button className="roll-dice" onClick= {rollDice}>Roll Dice</button>
        </main>
    )
}