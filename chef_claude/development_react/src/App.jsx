import Header from "./components/Header"
import Main from "./components/Main"
import Fav from "./components/fav"
import Pad from "./components/pads_challenge/Pad"
import pads from  "./components/pads_challenge/pads"
import React from "react"
import Form from "./components/form"
export default function App() {
  const [myPads, isSetMyPads]= React.useState(pads);

function toggle(id){
  //map over the pads array and if the current and if the current item has the sane id as the 
  //one passed to this function , then
  //flip its on value
  isSetMyPads(prevPads => prevPads.map(item => {
    return item.id === id ? {
      ...item, on: !item.on
    } : item
  }))
  console.log(id)
}
  function turnAllPadsOff(){
 //in the function we make another instance of object by changing the state of the swictch
 
    isSetMyPads(prevPads => prevPads.map(pad => ({
    ...pad,
    on:false
  })))
  }
const buttonElements = myPads.map(data=>(<Pad key ={data.id} 
  color={data.color} on={data.on} 
  toggle={
  toggle
}
id={data.id}
/>))
return (
  <>
   {/* <Header/>
   <Main/> */}
<main className="pad-container">
  {buttonElements}

  <button style={{
    backgroundColor: "red",
    opacity: 1,
    color: "white",
    display: "flex",
    justifyContent: "center"
   
  }} onClick={turnAllPadsOff}>Reset all pad settings</button>
</main>


 
   
   </>

)  
}