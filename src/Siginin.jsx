import Email from "next-auth/providers/email";
import React from "react";

const Siginin = () => {
    const handlesummit = (event) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);
        const email = data.email

        const existingdata =  JSON.parse(localStorage.getItem('formDataArray')) || [];
        const check = existingdata.some((present) => present.email === email)
        if (check){
            const user = existingdata.find((users) => 
                users.email === email
            )

            if (user.password == data.password){
                console.log("user sigined in succesfully");
            }
            else{
                alert("give coorect password");
            }
        }
        else{
            alert("siginup first");
        }
    }
    return (
<div className="SigininCard">
            <h1>Sigin in</h1>
            <form onSubmit={handlesummit}> 
                <label>Email : </label>
                <input placeholder="abc@gmail.com" id="email" name="email"></input>
                <label>password : </label>
                <input type = "password"  id="password" name="password"></input>
                <button type="summit">summit</button>
            </form>
        </div>
    );
}

export default Siginin;