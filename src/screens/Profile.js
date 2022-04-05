 import Layout from "../components/Layout";
 import axios from 'axios'
 import {useState,useEffect} from 'react'
import { useParams } from "react-router-dom";
import '../styles/profile.css'
 function Profile(){
    const api_host = process.env.REACT_APP_API_URL
     const [user,setUser] = useState({display_name:"",username:""})
     const[loading,setLoading] = useState(false)
     let {username} = useParams()
     const getUser = () => {
         setLoading(true)
         axios.get(`${api_host}/users/${username}`)
         .then(function(response){
             console.log(response.data)
             setUser(response.data)
             
         })
         .catch(err => console.log(err))
         setLoading(false)
     }

     useEffect(() => {
         getUser()
     },[username])
     if(user === null || loading){
         <Layout>
             <h1>loading profile...</h1>
         </Layout>
     }
     return(
         <Layout>
            <div className="profile-container">
                <div className="user-details">
                    <div className="pfp-box">
                        <img src="https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png" id="pfp"/>
                    </div>
                    <div className="content">
                        <h1>{user.display_name}</h1>
                        <p>@{user.username}</p>

                    </div>
                    
                </div>
                
            </div>
         </Layout>
         
     )
 }

 export default Profile;