import Layout from "../components/Layout";
import axios from 'axios'
import Item from "../components/Item";
import ProfileImage from "../components/ProfileImage";
import {useState,useEffect} from 'react'
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import '../styles/profile.css'
 function Profile(){
    const api_host = process.env.REACT_APP_API_URL
    
     const [user,setUser] = useState({display_name:"",username:""})
     const[loading,setLoading] = useState(false)
     const [userItems,setUserItems] = useState([])
     const id = localStorage.getItem('userId')
     const [follow,setFollow] = useState(false)

     let {username} = useParams()
     let navigate = useNavigate();
     const loggedInUser = localStorage.getItem('username') === username
     const getUser = () => {
         setLoading(true)
         axios.get(`${api_host}/users/${username}`)
         .then(function(response){
             console.log(response.data)
             setUser(response.data)
             setUserItems(response.data.items)
             
         })
         .catch(err => console.log(err))
         setLoading(false)
    }

    const toggleFollow = () => {
        if(follow){
            setFollow(false)
        }
        else {
            setFollow(true)
        }
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
                        <ProfileImage userId={9} />    
                    </div>
                    <div className="content">
                        <h1>{user.display_name}</h1>
                        <p>@{user.username}</p>

                    </div>
                    
                </div>
                <div className="user-dashboard">
                    <h2>Active Items</h2>
                    {loggedInUser ? 
                        <div className="user-actions">
                        <button id="create" onClick={() => {navigate('/new-item')}}>Sell/Trade Item</button>
                        <button id="edit" onClick={()=> {navigate(`/${username}/edit`)}}>Edit Profile</button>
                        </div>
                        :
                        <div className="user-actions">
                            { follow? 
                                <button id="followed" onClick={() => setFollow(false)}>Following</button>
                            :
                                <button id="follow" onClick={() => setFollow(true)}>Follow</button> 
                            }
                            
                        </div>

                    }
                    
                    
                    
                    <div className="user-items">
                        {userItems.map((item) => {
                            return (
                                <Item id={item.id} />
                            )
                        })}
                    </div>
                </div>
            </div>
         </Layout>
         
     )
 }

 export default Profile;