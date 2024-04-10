import React  , {useState } from "react";
import './Siginin.css';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Siginin = ({ OnSuccess }) => {
    const [showPassword, setShowPassword] = useState(false);


    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const handlesummit = (event) => {
        event.preventDefault();

        const data = new FormData(event.currentTarget);
        const email = data.get('email')
        console.log(email);
        if (!validateEmail(email)) {
            alert("Enter valid email");
            return false;
        }

        const existingdata = JSON.parse(localStorage.getItem('formDataArray')) || [];
        const check = existingdata.some((present) => present.email === email)
        if (check) {
            const user = existingdata.find((users) =>
                users.email === email
            )

            if (user.password === data.get('password')) {
                OnSuccess(user.username)
                console.log(user.username, "user sigined in succesfully");
            }
            else {
                console.log(user.password, data.password)
                alert("give correct password");
            }
        }
        else {
            alert("You havent sigined");
        }
    }
    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div className="SigininCard">
        <h1>Sign - In</h1>
        <form onSubmit={handlesummit}>
            <label>Email : </label>
            <input placeholder="abc@gmail.com" id="email" name="email"></input><br></br>
            <label>Password : </label>
            <input type={showPassword ? "text" : "password"} id="password" name="password"></input><br></br>
            <button  className= "visiblebutton" type="button" onClick={toggleShowPassword}>
    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
</button><br />
            <button type="submit" className="summitbutton" >Submit</button>
        </form>
    </div>
    );
}

export default Siginin;