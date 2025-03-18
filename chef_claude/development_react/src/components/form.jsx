import React from "react";



export default function Form(){

    function signUp(formData){
        const email = formData.get("email");
        const password = formData.get("password")
        console.log({
            email: email, password:password

        })

    }
    return (
        <section className="section_container">
          <h1>Signup form</h1>
          <form action={signUp}  className="form_container">
            <label htmlFor="email">Email:   </label>

                <input id = "email" type="email" 
                name="email" placeholder="joe@schmoe.com" />
                <br/>
                <label htmlFor="password">Password*   </label>

<input id = "password" type="password" 
name="password" placeholder="enter your password" />
<br/>
<button>Submit</button>
          
            </form>  
        </section>
    )
}
