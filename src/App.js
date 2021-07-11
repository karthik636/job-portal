import {useState, useEffect} from 'react'
import './App.css';
import Home from './components/Home'
import RDashboard from './components/Recruter_dashboard'
import JDashboard from './components/JobSeeker_Dashboard'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AuthProvider } from "./context/AuthContext"

function App() {

  
  const [jobData, setJobData] = useState([])

  useEffect(() => {
    try {
      let data = JSON.parse(localStorage.getItem('data'));
      if(data && data !== ''){
        setJobData(data)
      }
    } catch (error) {
      
    }
  }, [])

  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/r_dashBoard" render={()=><RDashboard jobData = {jobData} setJobData={setJobData} />} />
          <Route path="/j_dashboard" render={()=><JDashboard jobData = {jobData} />} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
