 import Layout from "../components/Layout";
 import axios from 'axios'
 import Item from "../components/Item";
 import {useState,useEffect} from 'react'
import { useParams } from "react-router-dom";
import '../styles/profile.css'
 function Profile(){
    const api_host = process.env.REACT_APP_API_URL
     const [user,setUser] = useState({display_name:"",username:""})
     const [showCreate,setShowCreate] = useState(false)
     const[loading,setLoading] = useState(false)
     const [newItem,setNewItem] = useState({seller:localStorage.getItem('userId'),name:"",desc:"",price:0,trade:false,sold:false})
     const [recentItemId,setItemId] = useState(10)
     const [userItems,setUserItems] = useState([])
     let {username} = useParams()
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
      const toggleShow = () => {
          if(showCreate){
              setShowCreate(false)
          }
          else{
              setShowCreate(true)
          }
      }
     useEffect(() => {
         getUser()
     },[username])

     const createItemChange = (event) => {
        let targ_name = event.target.name
        let targ_val = event.target.value
        const curItem = {
            [targ_name]:targ_val
        }
        setNewItem({...newItem,...curItem})
     }

    const createItem = (event) => {
        event.preventDefault()
        axios.post(`${api_host}/items/create`,newItem)
        .then(function(response){
            console.log(response.data)
            setItemId(response.data.id)
        })
        .catch(err => console.log(err))
    }

    
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
                <div className="user-dashboard">
                    <h2>Active Items</h2>
                    <button id="create" onClick={toggleShow}>Sell/Trade Item</button>
                    {showCreate &&
                        <div id="create-item-div">
                            <h3>add new item</h3>
                            <form className="create-item-form" onSubmit={createItem}>
                                <label>Item Name</label>
                                <input type="text" name="name" onChange={createItemChange}/>
                                <label>Item Description</label>
                                <input type="text" name="desc" onChange={createItemChange}/>
                                <label>Item Price</label>
                                <input type="number" name="price" onChange={createItemChange}/>
                                <button type="submit">Create</button>
                            </form>
                            <form className="item-image-form" encType="multipart/form-data" action={`${api_host}/images/item-image`} method="POST">
                                <input name="itemId" type="text" value={recentItemId}/>
                                <label>Upload Image</label>
                                <input type="file" name="item-image"/>
                                <input type="submit"/>
                            </form>
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