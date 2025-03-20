import Header from "./components/Header"
import Main from "./components/Main"
import Fav from "./components/fav"
import Pad from "./components/pads_challenge/Pad"
import pads from  "./components/pads_challenge/pads"
import React from "react"
import Form from "./components/form"
export default function App() {
  const [myPads, isSetMyPads]= React.useState(pads);

const buttonElements = myPads.map(data=>(<Pad key ={data.id} color={data.color} on={data.on}/>))
return (
  <>
   {/* <Header/>
   <Main/> */}
<main className="pad-container">
  {buttonElements}
  
</main>


 
   
   </>

)  
}