import React from "react";



export default function Form(){

    function handleSubmit(event){
        event.preventDefault()
        const formEl = event.currentTarget
        const formData = new FormData(formEl);
        const email = formData.get("email")
        const password = formData.get("password")

        console.log([email,password])
        formEl.reset()
    }
    return (
        <section className="section_container">
          <h1>Signup form</h1>
          <form action="" onSubmit={handleSubmit} method="post" className="form_container">
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
