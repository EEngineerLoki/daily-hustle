import React from 'react'
import './App.scss'
import {
   Home,
   Blog,
   Shop,
   Contact,
   Header,
   Footer
} from './components';

import {
   homeData,
   blogData,
   shopData,
   contactData,
} from './data';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
     <Router>
        <Header/>
        <Routes>
           <Route path='/' element={<Home {...homeData}/>}></Route>
           <Route path='blog' element={<Blog {...blogData}/>}></Route>
           <Route path='shop' element={<Shop {...shopData}/>}></Route>
           <Route path='contact' element={<Contact {...contactData}/>}></Route>
        </Routes>
        <Footer/>
     </Router>
  )
}

export default App


