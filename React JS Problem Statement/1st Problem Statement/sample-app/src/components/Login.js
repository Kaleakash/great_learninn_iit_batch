import { useState } from "react"
import {useNavigate} from 'react-router-dom';

export default function Login() {
const [uname,setUname]=useState("");
const [pname,setPname]=useState("");
const navigate = useNavigate();


const db = [
    {uname:"raj",pname:"123"},
    {uname:"ravi",pname:"567"},
    {uname:"ramesh",pname:"789"}
]
const handleValue = (event)=> {
    let name = event.target.name;
    let value = event.target.value
    //console.log(name+" "+value);
    if(name=="uname"){
            setUname(value);
    }else {
            setPname(value);
    }   

}
const handleSubmit= (event)=> {
    event.preventDefault();
    console.log(uname+" "+pname);
    let result = db.find(p=>p.uname==uname && p.pname == pname);
    if(result!==undefined){
          alert("successfully login")
          navigate("home");  
    }else {
            alert("failure try once again")
    }
    setUname("");
    setPname("");
}
    return(
    <div>
        <h2>Login Page</h2>
        <form onSubmit={handleSubmit}>
            <label>UserName</label>
            <input type="text" name="uname" onChange={handleValue} value={uname}/><br/>
            <label>Password</label>
            <input type="password" name="pname" onChange={handleValue} value={pname}/><br/>
            <input type="submit" value="submit"/>
            <input type="reset" value="reset"/>
        </form>
    </div>
    )
}