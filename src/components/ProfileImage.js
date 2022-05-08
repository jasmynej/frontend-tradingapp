import {useState,useEffect} from 'react'
import axios from 'axios'

function ProfileImage({userId}){
    const [imgSrc,setImgSrc] = useState("")
    const api_host = process.env.REACT_APP_API_URL
    const getImage = () => {
        axios.get(`${api_host}/images/profile-image/${userId}`)
        .then(function(response){
            console.log(response)
            if(response.data.b64Data){
                setImgSrc(response.data.b64Data)
            }
            else {
                setImgSrc("https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png")
            }
            
        })
        .catch(err =>  setImgSrc("https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"))
    }

    useEffect(() => {
        getImage()
    },[])
    return(
        
            <img src={imgSrc}  width={200} id="pfp"/>
        
    )
}

export default ProfileImage;