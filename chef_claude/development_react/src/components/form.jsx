import React from "react";



export default function Form(){

    function signUp(formData){
        const email = formData.get("email");
        const password = formData.get("password")
        const employmentStatus = formData.get("employmentStatus")
        const favColor = formData.get("favColor")
        console.log({
            email: email, password:password,
            countryStatus: employmentStatus,
            favColor: favColor

        })

    }
    return (
        <section className="section_container">
          <h1>Signup form</h1>
          <form action={signUp}  className="form_container">
            <label htmlFor="email">Email:   </label>

                <input id = "email" type="email" 
                name="email" defaultValue="aremujap@gmail.com" placeholder="joe@schmoe.com" />
                <br/>
                <label htmlFor="password">Password*   </label>

<input id = "password" type="password" 
name="password" defaultValue="*olamide1234" placeholder="enter your password" />
<br/>

<label htmlFor="description">Description:</label>
<textarea name="description" id="description" defaultValue="This is the description"></textarea>

<fieldset>
    <legend>Country Status</legend>
<label>
    <input type="radio" name="employmentStatus"/>
    Nigerian 
</label>
<label>
    <input type="radio" name = "employmentStatus"/>
Asia
</label>
</fieldset>
<label htmlFor="favColor">What's your favourite clor?</label>
<select id="favColor" name = "favColor" defaultValue="" required>
    <option value="" disabled>--Choose a color --</option>
    <option value="red">Red</option>
    <option value="red">Orange</option>
    <option value="red">Yellow</option>
    <option value="red">Green</option>
    <option value="red">Blue</option>
    <option value="red">Indigo</option>
    <option value="red">Violet</option>
</select>

<button>Submit</button>
          
            </form>  
        </section>
    )
}
