import React from "react";

export default function Fav(){
    const [myFavoriteThings, setMyFavoriteThings]= React.useState([]) 
   
    const allFavoriteThings = [
        "Mercedes","Toyota","Nissan","Roll Royce", "Mistubishi"
    ];

    const thingsElements = myFavoriteThings.map(thing => <p key ={thing}>{thing}</p>)

    function addFavoriteThings(){
        setMyFavoriteThings(
           prevFavThings => [...prevFavThings,allFavoriteThings[prevFavThings.length]] 
        )
    }

    return(
        <main>
            <button onClick = {addFavoriteThings}>Add item</button>
        <section aria-live = "polite">
            {thingsElements}
        </section>
        
        </main>
    )

}