import {useState,useEffect} from 'react'
import axios from 'axios'
import ItemImage from '../components/ItemImage'
function Admin () {
    const api_host = process.env.REACT_APP_API_URL
    const [items,setItems] = useState([])
    const [createdItemId,setId] = useState(1)
    const [itemImages,setItemImages] = useState([])

    const getItems = () => {
        axios.get(`${api_host}/items`)
        .then(function(response){
            setItems(response.data)
        })
        .catch(err => console.log(err))
    }

    const createItem = (event) => {
        event.preventDefault()
       

        axios.post(`${api_host}/images/item-image`,{
            item_id:10,
            item_image:event.target[1].value
        })
        .then(function(response){
            console.log(response.data)
        })
        .catch(err => console.log(err))
    }
    
    useEffect(() => {
        getItems()
    },[])

    return (
        <div>
            <h1>Admin Page</h1>

            <h2>Create Item</h2>
            <form onSubmit={createItem} encType="multipart/form-data">
                <input type="file" name="item-image" />
                <input type="submit"/>
            </form>

            <h2>All items</h2>
            {
                items.map((item) => {
                    return (
                        <div key={item.id}>
                            <ItemImage item_id={1} />
                            <p>{item.name}</p>
                        </div>
                    )
                    
                })
            }

            
        </div>
    )
}

export default Admin;