import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Register() {

const navigate = useNavigate();

const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const handleSubmit = async(e)=>{

e.preventDefault();

try{

await API.post("/auth/register",{
name,
email,
password
});

alert("Registration Successful");

navigate("/login");   // 🔥 Login page open

}catch(err){

alert("Registration Failed");

}

};

return(

<div>

<h2>Register</h2>

<form onSubmit={handleSubmit}>

<input
placeholder="Name"
onChange={(e)=>setName(e.target.value)}
/>

<input
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<button>Register</button>

</form>

</div>

);

}

export default Register;