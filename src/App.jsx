import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import './App.css'
import Project from './components/project'
import StarsCanvas from './components/StarsCanvas'
import Test from './components/Test'
import Project from './components/Project'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Project/>}/>
        <Route path="/test" element={<Test/>}/>
        
      </Routes>
    </Router>
   
       
 
  )
}

export default App
