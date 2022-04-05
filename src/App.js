import './App.css';
import './components/Layout'
import Layout from './components/Layout';
function App() {
  console.log(process.env.REACT_APP_API_URL)
  return (

    <Layout>
      <h1>home page</h1>
    </Layout>
  );
}

export default App;
