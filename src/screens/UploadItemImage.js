import Layout from "../components/Layout";
import "../styles/forms.css"
import {useState,useEffect} from 'react'
import { useParams } from "react-router-dom";
import axios from "axios";
function UploadImage () {
    const api_host = process.env.REACT_APP_API_URL
    let {id} = useParams()
    const [item,setItem] = useState({id:id,name:""})

    const getItem = () => {
        axios.get(`${api_host}/items/${id}`)
        .then(function(response){
            console.log(response)
            setItem(response.data)
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getItem()
    },[])
    return (
        <Layout>
            <div className="new-item-main">
                <div className="new-item-container">
                    <h1>Upload Image(s)</h1>
                    <p>Item: {item.name} </p>
                </div>
            </div>
        </Layout>
    )
}
export default UploadImage;