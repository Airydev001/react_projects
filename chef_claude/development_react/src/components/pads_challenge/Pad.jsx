import React from "react"


export default function Pad(props){


const [on, setOn ]= React.useState(props.on)

function toggle(){
    setOn(prevOn => !prevOn);
}




    // function addFavoriteThings(){
    //     setMyFavoriteThings(
    //        prevFavThings => [...prevFavThings,allFavoriteThings[prevFavThings.length]] 
    //     )
    // }

    return(
        // <main>
        //     <div className="pad-container">
             
        //     </div>
        // </main>

        <button style= {
            {
                backgroundColor: props.color
            }

            
        } 
        onClick={  toggle}
        
        className = { on ? "on": undefined}></button>
    )
}