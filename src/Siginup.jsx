import React, { useState } from "react";
import './Siginup.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Siginup = () => {
    const [showPassword, setShowPassword] = useState(false);

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function validatePassword(password) {
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{"':;?/>.<,]).{8,}$/;
        return passwordRegex.test(password);
    }

    const handlesummit = (event) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);
        const newEmail = data.get('email');
        const newPassword = data.get('password');

        const existingData = JSON.parse(localStorage.getItem('formDataArray')) || [];
        const emailExists = existingData.some((formData) => formData.email === newEmail);

        if (emailExists) {
            alert("Email already exists.");
        } else {
            if (!validateEmail(newEmail)) {
                alert('Enter a proper email address.');
                return;
            }

            if (!validatePassword(newPassword)) {
                alert('Password must be at least 8 characters long and contain at least 1 uppercase letter, 1 lowercase letter, 1 digit, and 1 special character.');
                return;
            }

            const formDataObject = {};
            data.forEach((value, key) => {
                formDataObject[key] = value;
            });

            existingData.push(formDataObject);
            localStorage.setItem('formDataArray', JSON.stringify(existingData));
            alert("Successfully Signuped !")
        }
    }

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="SiginupCard">
            <h1>Sign - up</h1>
            <form onSubmit={handlesummit}>
                <label>Username : </label>
                <input placeholder="Username" id="username" name="username"></input><br></br>
                <label>Email : </label>
                <input placeholder="abc@gmail.com" id="email" name="email"></input><br></br>
                <label>Password : </label>
                <input type={showPassword ? "text" : "password"} id="password" name="password"></input><br></br>
                <button type="button" className= "visiblebutton" onClick={toggleShowPassword}>
    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
</button><br />

                <button className = "summitbutton" type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Siginup;