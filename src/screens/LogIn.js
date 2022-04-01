import "../styles/auth.css"
import {authService} from "../helpers/auth_methods"
import { useNavigate } from "react-router-dom";
function LogIn(){
    let navigate = useNavigate();
    const loginSubmit = (event) => {
        event.preventDefault()
        let username = event.target[0].value;
        let password = event.target[1].value;
        authService.login(username,password).then(function(res){
            if(res){
               
                console.log("redirect")
            }
            else{
                console.log("get errs")
            }
        });

        //useNavigate(`/${username}`)
       
        
        
    }
    return(
        <div className="auth-container">
            <div className="login-container">
                <h1>Login</h1>
                <form id="login" onSubmit={loginSubmit}>
                    <label>Username</label>
                    <br/>
                    <input type="text" name="username"/>
                    <br/>
                    <label>Password</label>
                    <br/>
                    <input type="password" name="password"/>
                    <br/>
                    <br/>
                    <button id="login-btn">Login</button>
                </form>
            </div>
        </div>
    )
}

export default LogIn;