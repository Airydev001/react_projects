import React from "react"


export default function Pad(props){







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
        onClick={()=>props.toggle(props.id)}
        
        className = { props.on ? "on": undefined}></button>
    )
}