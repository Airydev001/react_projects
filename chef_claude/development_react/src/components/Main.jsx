import React from "react"
import Recipe from "./Recipe"
import IngredientList from "./ingredientList";
import { getRecipeFromMistral } from "./ai";
export default function Main(){
   
    const [modifyIngredients, setIngredients]= React.useState([
        "all the main spices", "pasta", "ground beef", "tomato paste"
     ]);

    const [recipeShown, isRecipeShown]= React.useState("");
//     function handleSubmit(event){
//         event.preventDefault()
//     const formData = new FormData(event.currentTarget);
// const newIngredient = formData.get("ingredient")

// if(event.currentTarget.value === ""){
//     return null;
// }


async function getRecipe() {
  //  isRecipeShown(prevShown => !prevShown);
 const recipeMarkdown = await getRecipeFromMistral(modifyIngredients)
isRecipeShown(recipeMarkdown);
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
         { !(modifyIngredients.length === 0) &&  
         <IngredientList ingredientListItems={ingredientListItems} 
         getRecipe={getRecipe}
         modifyIngredients={modifyIngredients}
          />
         
         
       }

{recipeShown && <Recipe recipe={recipeShown}/>}

        </main>
    )
}