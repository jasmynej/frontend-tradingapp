import {useState,useEffect} from 'react'
import axios from 'axios'

function ItemImage({item_id}) {
    const [imgSrc,setImgSrc] = useState("")
    const api_host = process.env.REACT_APP_API_URL
    const getImage = () => {
        axios.get(`${api_host}/images/item-image/${item_id}`)
        .then(function(response){
            setImgSrc(response.data.b64Data)
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getImage()
    },[])
    return (
        <img src={imgSrc} width={200}/>
    )
}

export default ItemImage;