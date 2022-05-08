import Layout from "../components/Layout"
import {useState, useEffect} from 'react'
import "../styles/forms.css"
function EditProfile () {
    const [user,setUser] = useState({display_name:"",username:""})
    const api_host = process.env.REACT_APP_API_URL

    const id = localStorage.getItem('userId')
    return (
        <Layout>
            <div>
                <h1>Edit Profile</h1>

                <h3>Set Profile Image</h3>
                <form encType="multipart/form-data" action={`${api_host}/images/profile-image/${id}`} method="POST">
                    <input type="file" name="profile-image" />
                    <button type="submit" id="submit-btn">Upload</button>
                </form>
            </div>
        </Layout>
    )
}

export default EditProfile;