import React from "react"
import Recipe from "./Recipe"
export default function Main(){
   
    const [modifyIngredients, setIngredients]= React.useState([
        "all the main spices", "pasta", "ground beef", "tomato paste"
     ]);

    const [recipeShown, isRecipeShown]= React.useState(false);
//     function handleSubmit(event){
//         event.preventDefault()
//     const formData = new FormData(event.currentTarget);
// const newIngredient = formData.get("ingredient")

// if(event.currentTarget.value === ""){
//     return null;
// }


function checkRecipeFeed(){
    isRecipeShown(prevShown => !prevShown);
}

//  setIngredients(prevIngredients => [...prevIngredients, newIngredient]);


//     }

function handleSubmit(formData){
    
    const newIngredient = formData.get("ingredient");
    setIngredients(prevIngredients => [...prevIngredients, newIngredient])
  
    console.log({
       ingredient: newIngredient

    })
}

    const ingredientListItems = modifyIngredients.map(ingredient => (
        <li>{ingredient}</li>
    ));
    return (
        <main>
            <form className ="add-ingredient-form" action={handleSubmit}>
                <input 
                type = "text"
                placeholder = "e.g. oregano"
                aria-label="Add ingredient"
                name="ingredient"
                />
                <button> Add ingredient</button>
                
            </form>
         { !(modifyIngredients.length === 0) &&  <section>
                <h2>Ingredients on hand:</h2>
                <ul className="ingredients-list" aria-live="polite">{ingredientListItems}</ul>
                { modifyIngredients.length > 3 &&<div className="get-recipe-container">
                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick={checkRecipeFeed}>Get a recipe</button>
                </div>}
            </section>}

{recipeShown && <Recipe/>}

        </main>
    )
}