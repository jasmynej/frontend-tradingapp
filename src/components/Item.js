import axios from 'axios'
import {useState, useEffect} from 'react'
import ItemImage from './ItemImage'
import '../styles/items.css'
function Item ({id}) {
    const api_host = process.env.REACT_APP_API_URL
    const [item,setItem] = useState({name:"",desc:"",imageData:""})
    const [img,setImg] = useState("")
    const getItem = () => {
        axios.get(`${api_host}/items/${id}`)
        .then(function(response){
            setItem(response.data)

            setImg(response.data.images[0].imageData)
            
        })
        .catch(err => console.log(err))
    }

    useEffect(()=> {
        getItem()
    },[])
    return (
        <div className='item'>  
            <ItemImage item_id={id}/>
            <h1>{item.name}</h1>
            <p>{item.desc}</p>
        </div>
    )
}

export default Item;