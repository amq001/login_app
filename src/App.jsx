import { useState } from 'react'
import './App.css'
import LoginPage from './components/LoginPage'
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import HomePage from './components/HomePage/HomePage';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path='' element={<LoginPage/>} />
          <Route path='/home' element={<HomePage/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
