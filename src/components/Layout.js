import {useState,useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import {authService} from '../helpers/auth_methods'
import {AiOutlineUser} from "react-icons/ai"
function Layout({children}){
    let groups = ['BTS','Twice','Red Velvet','Got7','NCT','Monsta X']
    const [loggedIn,setLoggedIn] = useState(false)
    const [userId,setUserId] = useState(null)
    const [username,setUsername] = useState(null)
    useEffect(() => {
        if(localStorage.getItem('username') !== null){
            setLoggedIn(true)
            setUserId(localStorage.getItem('userId'))
            setUsername(localStorage.getItem('username'))
            //console.log(localStorage.getItem('username'))
        }
    })
    
    let navigate = useNavigate();

    const logout = () => {
        authService.logout()
        navigate('/')
        setLoggedIn(false)
    }
    return (
        <div className="main-container">
            <div className="announcement-bar">
                    <h1 id="announcement">coming soon</h1>
            </div>
            <div className="nav-container">  
                <div className="nav-content">
                    <div className="nav-brand" onClick={() => {navigate('/')}}>
                        <h1>kpop trading app</h1>
                    </div>
                    <div className="nav-search">
                        
                        <form>
                            <input type="text" id="search" />
                        </form>
                    </div>
                    <div className="nav-buttons">
                        {
                            !loggedIn ?
                            <div  className="nav-buttons">
                                <button id="sign-up" onClick={() => {navigate("/create-account")}}>Sign Up</button>
                                <button id="log-in" onClick={() => {navigate("/login")}}>Log In</button>
                            </div>
                            :
                            <div  className="nav-buttons">
                                
                                <div></div>
                                <div></div>
                                <div></div>
                                <div onClick={() => {navigate(`/${username}`)}}><AiOutlineUser size={30}/></div>
                                <button id="log-out" onClick={logout}>Log Out</button>
                            </div>
                        }
                        
                    </div>
                </div>
            </div>
           
            <div className="content">
                {children}
            </div>
            <div className="footer">
                <p>About</p>
                <p>Support</p>
                <p>Terms & Conditions</p>
            </div>
        </div>
    )
    
}

export default Layout;