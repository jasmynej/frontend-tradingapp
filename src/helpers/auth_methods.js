import axios from 'axios'

export const authService = {
    login,
    logout,
    createAccount
}
const api_host = process.env.REACT_APP_API_URL

async function createAccount(email,username,display_name,password,password_comf) {
    try {
        const response = await axios.post(`${api_host}/auth/register`,{
            email:email,
            display_name:display_name,
            username:username,
            password:password,
            password_comf:password_comf
        })
        if(response.data.errs === undefined){
            localStorage.setItem('userId',response.data.id)
            localStorage.setItem('username',response.data.username)
            return [true]
        }
        else{
            return[false,response.data.errs]
        }
    }
    catch(err){
        console.log(err)
    }

}
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