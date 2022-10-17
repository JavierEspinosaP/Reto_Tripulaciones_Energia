import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './Home'
import Scanner from './Scanner'
import Form from './Form'
import Advance from './Advance'

function Main() {
  return (
    <div>
      <Routes>
        <Route element={<Home/>} path={"/"}/>
        <Route element={<Scanner/>} path={"/scanner"}/>
        <Route element={<Form/>} path={"/form"}/>
        <Route element={<Advance/>} path={"/advance"}/>
      </Routes>

    </div>
  )
}

export default Main
