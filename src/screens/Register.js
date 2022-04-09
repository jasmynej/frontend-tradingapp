import "../styles/auth.css"
import {authService} from "../helpers/auth_methods"
import { useNavigate } from "react-router-dom";
import {useState} from 'react'
function Register(){
    let navigate = useNavigate();
    const [newUser,setNewUser] = useState({
        email:"",
        username:"",
        display_name:"",
        password:"",
        password_comf:""
    })
    const [errMsgs,setErrMsgs] = useState([])

    const registerChange = (event) => {
        let targ_name = event.target.name
        let targ_val = event.target.value
        const curUser = {
            [targ_name]:targ_val,

        }
        setNewUser({...newUser,...curUser})
        console.log({...newUser,...curUser})
    }
    const registerSubmit = (event) => {
        event.preventDefault()
        authService.createAccount(newUser.email,newUser.username,newUser.display_name,newUser.password,newUser.password_comf)
        .then(function(res){
            if(res[0]){
                navigate(`/${newUser.username}`)
                console.log('successfully registered')
            }
            else{
                setErrMsgs(res[1])
                console.log(res[1])
            }
        })
    }
    return(
        <div className="auth-container">

            <div className="register-container">
                <h1>Create Account</h1>
                {
                    errMsgs.length > 0 &&
                    <div>
                        {errMsgs.map((msg) => {
                            <p>{msg}</p>
                        })}
                    </div>
                }
                <form id="auth-form" onSubmit={registerSubmit}>
                    <label>Email</label>
                    <input type="email" name="email" onChange={registerChange} />
                    <br/>
                    <label>Username</label>
                    <br/>
                    <input type="text" name="username" onChange={registerChange}/>
                    <br/>
                    <label>Display Name</label>
                    <br/>
                    <input type="text" name="display_name" onChange={registerChange}/>
                    <br/>
                    <label>Password</label>
                    <br/>
                    <input type="password" name="password" onChange={registerChange}/>
                    <br/>
                    <label>Password Confirmation</label>
                    <br/>
                    <input type="password" name="password_comf" onChange={registerChange}/>
                    <br/>
                    <br/>
                    <button id="auth-btn">Create Account</button>
                </form>
            </div>
            
        </div>
    )
}

export default Register;