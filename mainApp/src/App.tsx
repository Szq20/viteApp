import { useState } from 'react'
// import './App.css'
import DefLayout from './layout/index'
import {BrowserRouter as Router} from 'react-router-dom';


function App() {

  return (
    <>
    <Router>
        <DefLayout/>
    </Router>
    </>
  )
}

export default App
