import axios from 'axios'

export const authService = {
    login,
    logout
}
const api_host = process.env.REACT_APP_API_URL
async function login(username,password){
    
    try {
      const response =  await axios.post(`${api_host}/auth/login`,{
                            username:username,
                            password:password
                        })
        
        if(response.data.errs === undefined){
            localStorage.setItem('userId',response.data.id)
            localStorage.setItem('username',response.data.username)
            return true
        }
        else{
            return false
        }
    }
    catch(err){
        console.log(err)
    }
    
    
}

function logout(){
    localStorage.clear();
}