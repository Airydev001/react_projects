import React from "react"

export default function Main(){
   
    const [modifyIngredients, setIngredients]= React.useState([ ]);

//     function handleSubmit(event){
//         event.preventDefault()
//     const formData = new FormData(event.currentTarget);
// const newIngredient = formData.get("ingredient")

// if(event.currentTarget.value === ""){
//     return null;
// }




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
            <ul>
                    {ingredientListItems}
                </ul>
        </main>
    )
}