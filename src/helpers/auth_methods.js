import axios from 'axios'

export const authService = {
    login,
    logout
}
async function login(username,password){
    try {
      const response =  await axios.post("http://localhost:2000/auth/login",{
                            username:username,
                            password:password
                        })
        
        if(response.data.errs === undefined){
            localStorage.setItem('userId',response.data.id)
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

}