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
   booksData
} from './data';

import Books from './components/pages/Blog/Books/Books';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
     <Router>
        <Header/>
        <Routes>
           <Route path='/' element={<Home {...homeData}/>}></Route>
           <Route path='blog' element={<Blog {...blogData}/>}></Route>
           <Route path='blog/reviews' element={<Books {...booksData}/>}></Route>
           <Route path='blog/careers' element={<Books/>}></Route>
           <Route path='blog/health' element={<Books/>}></Route>
           <Route path='shop' element={<Shop {...shopData}/>}></Route>
           <Route path='contact' element={<Contact {...contactData}/>}></Route>
        </Routes>
        <Footer/>
     </Router>
  )
}

export default App


