import React from 'react'
import style from './SignIn.module.css'
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link, useNavigate} from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';


export const SignIn = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [typeValue,setTypeValue] = useState("password")
    const [credential,setCredential] = useState("rightCred");
    const [emptyCred, setEmptyCred] = useState(false)
    const navigate = useNavigate();

    const handlePassword = (e)=>{
        setPassword(e.target.value)
        console.log(password);
    }

    const handleEmail = (e)=>{
        setEmail(e.target.value)
        console.log(email);
    }

    const handleSubmit = () =>{
        const credBody = {
            email,
            password
        }
        if(password === "" || email === ""){
            setEmptyCred(true);
            setCredential("wrongCred");
            return
        }

        axios.post('http://localhost:5000/login/user',credBody).then(function (response) {
            console.log(response);
            if(response.status === 200){
                document.cookie = "isLogin=true";
                document.cookie = `username=${response.data.user}`;
                alert("SuccessFull");
                setCredential("rightCred")
                 navigate("/", { replace: true });
            }else{
                setCredential("wrongCred")
            }
          })
          .catch(function (error) {
            console.log("error in login",error);
            setCredential("wrongCred")
          });
    }

    const handleCheckBox = (e) =>{
        if(e.target.checked){
            setTypeValue("text")
        }else{
            setTypeValue("password")
        };
    }
  return (
    <div>
        <div className={style.container}>
           
            <div className={style.shadowBoxContainer}>
                <h1><span>Hi</span> ,Welcome Back</h1>
                <div >
                    <label className={style.gray} htmlFor="email">Email</label>
                    <Box component="form" noValidate autoComplete="off" className={style.inputcont}>
                        <FormControl sx={{ width: '100%'}}>
                            <OutlinedInput placeholder="Please enter your email" required onChange={handleEmail}/>
                        </FormControl>
                    </Box>
                    <label className={style.gray} htmlFor="password">Password</label>
                    <Box component="form" noValidate autoComplete="off" className={style.inputcont}>
                        <FormControl sx={{ width: '100%'}}>
                            <OutlinedInput placeholder="Please enter your password" required type={typeValue} onChange={handlePassword}/>
                        </FormControl>
                    </Box>
                    <p className={style[credential]}>{emptyCred === true ? "Please enter both email ID & Password" : "Invalid username or Password"} </p>
                    <div className={style.inputcontO}>
                        <input type="checkbox" onChange={handleCheckBox}/>
                        <label style={{marginTop:"13px", marginRight:"5px"}} >Show password</label>
                    </div>
                    <div className={style.checkBoxSubmit}>
                        <Link to="/signup" className={style.addLink}>Create a new account</Link>
                        <Button variant="contained" disableElevation onClick={handleSubmit}>
                            Login
                        </Button>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}
