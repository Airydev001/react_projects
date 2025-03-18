import React from "react"

export default function Main(){
   
    const [modifyIngredients, setIngredients]= React.useState([ "Chicken", "Oregano", "Tomatoes"]);

    function handleSubmit(event){
        event.preventDefault()
    const formData = new FormData(event.currentTarget);
const newIngredient = formData.get("ingredient")

if(event.currentTarget.value === ""){
    return null;
}




 setIngredients(prevIngredients => [...prevIngredients, newIngredient]);


    }

    const ingredientListItems = modifyIngredients.map(ingredient => (
        <li>{ingredient}</li>
    ));
    return (
        <main>
            <form className ="add-ingredient-form" onClick={handleSubmit}>
                <input 
                type = "text"
                placeholder = "e.g. oregano"
                aria-label="Add ingredient"
                name="ingredient"
                />
                <button> Add ingredient</button>
                
            </form>
            <ul>
                    {ingredientListItems}
                </ul>
        </main>
    )
}