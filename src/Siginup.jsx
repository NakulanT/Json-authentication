import React from "react";

const Siginup = () => {

    const handlesummit = (event) =>{
        event.preventDefault();

        const data = new FormData(event.currentTarget);
        console.log(data , data)

        const newEmail = data.get('email');

        console.log("newEmail : " , newEmail);

        const existingData = JSON.parse(localStorage.getItem('formDataArray')) || [];

        console.log("exisitingData : " , existingData);

        const emailExists = existingData.some((formData) => formData.email === newEmail);

        console.log("email Exixts : ",emailExists)
        if (emailExists){
            alert("its alredy been there");
        }
        else{
            const formDataObject = {};
            data.forEach((value, key) => {
              formDataObject[key] = value;
            });

            console.log("formDataObj : ",formDataObject);

            existingData.push(formDataObject);

            localStorage.setItem('formDataArray', JSON.stringify(existingData));

        }
    }
    return (
        <div className="SiginupCard">
            <h1>Sigin up</h1>
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

export default Siginup;