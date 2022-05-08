import './App.css';
import './components/Layout'
import Layout from './components/Layout';
import Item from './components/Item';
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import {useState,useEffect} from 'react'
function App() {
  const api_host = process.env.REACT_APP_API_URL
  const [homeItems,setItems] = useState([])

  const getItems = () => {
    axios.get(`${api_host}/items`)
    .then(function(response){
      console.log(response)
      setItems(response)
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getItems()
  },[])
  return (

    <Layout>
      <h1>home page</h1>
      <div className='home-items'>
        
      </div>
    </Layout>
  );
}

export default App;
