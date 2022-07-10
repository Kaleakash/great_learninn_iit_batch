import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
export default function Login() {
let [uname,setUname]=useState("");
let [pname,setPname]=useState("");
let navigate = useNavigate();
let checkUser=(event)=> {
    //console.log("Hi");
    //console.log(event.target.name+" "+event.target.value);
    if(event.target.name=="uname"){             // event.target.name = "uname" event.target.value =
        setUname(event.target.value);
    }
    if(event.target.name=="pname"){
        setPname(event.target.value);
    }
}
let db = [
    {uname:"raj",pname:"123"},
    {uname:"ravi",pname:"456"},
    {uname:"ramesh",pname:"789"}
]
let verifyUser=(event)=>{
    event.preventDefault();     // disable pre-defined action of submit button 
    //axios.get("url").then("").catch("")
    let result  = db.find(u=>u.uname==uname && u.pname==pname);
    if(result==undefined){
        alert("Invalid username or password")
    }else {
        alert("Successfully Login");
        navigate("/home");
    }
    setUname("");
    setPname("");
}

let reset=(event)=> {
    setUname("");
    setPname("");
}
    return(
        <div>
            <h2>Login Page</h2>
            <form onSubmit={verifyUser}>
                <label>UserName</label>
                <input type="text" name="uname" onChange={checkUser} value={uname} required/><br/>
                <label>Password</label>
                <input type="password" name="pname" onChange={checkUser} value={pname} required/><br/>
                <input type="submit" value="submit"/>
                <input type="button" value="reset" onClick={reset}/>
            </form>
        </div>
    )
}

