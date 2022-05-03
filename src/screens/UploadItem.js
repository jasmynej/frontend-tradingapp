import Layout from "../components/Layout";
import "../styles/forms.css"
import {useState,useEffect} from 'react'
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
function UploadItem(){
    const api_host = process.env.REACT_APP_API_URL
    let navigate = useNavigate();
    const [newItem,setNewItem] = useState({seller:localStorage.getItem('userId'),name:"",desc:"",price:0,trade:false,sold:false})

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
            setNewItem(response.data)
            
        })
        .catch(err => console.log(err))
        //navigate(`/new-item/${newItem.id}/image`)
    }

    const uploadImage = (event) => {
        event.preventDefault()
        axios.post(`${api_host}/images/item-image/${newItem.id}`)
        .then(function(response){
            
            console.log(response)
            //navigate(`/${localStorage.getItem('username')}`)
        })
        .catch(err => console.log(err))
    }
    if (newItem.id === undefined){
        return (
            <Layout>
                <div className="new-item-main">
                    <div className="new-item-container">
                    <h1>New Item</h1>
                        <form className="new-item-form" onSubmit={createItem}>
                            <div className="item-form-row">
                            <label>Item Name</label>
                            <br/>
                            <input name="name" type="text" onChange={createItemChange}/>
                            </div>
                            <div className="item-form-row">
                            <label>Item Price</label>
                            <br/>
                            <input name="price" type="number" onChange={createItemChange}/>
                            </div>
                            <div className="item-form-row">
                            <label>Item Description</label>
                            <br/>
                            <input name="desc" type="text" onChange={createItemChange}/>
                            </div>
                            
                            <button type="submit" id="submit-btn">Create</button>
                            
                        </form>
                    </div>
                </div>
                
                
            </Layout>
        )
    }
    else {
        return (
            <Layout>
            <div className="new-item-main">
                <div className="new-item-container">
                    <h1>Upload Image(s)</h1>
                    <p>Item: {newItem.name} </p>
                    <form className="new-item-form" encType="multipart/form-data" action={`${api_host}/images/item-image/${newItem.id}`} method="POST">
                                <label>Upload Image</label>
                                <input type="file" name="item-image"/>
                                <input type="submit"/>
                    </form>
                </div>
            </div>
            </Layout>
        )
        
    }
    
}

export default UploadItem;