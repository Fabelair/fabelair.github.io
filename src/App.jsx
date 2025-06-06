import { useState } from 'react'
import { HashRouter as Router, Routes, Route } from "react-router-dom";//npm i -D react-router-dom@latest
import './index.css';
import Counter from './components/counter';
import Content from './components/content';
import Liste from './components/liste';
import Buy from './components/buy';
function App() {

  return (
    <Router>
        <Routes>
            <Route path="/" element={
              <div class="select-none h-[98vh] grid lg:grid-rows-10 grid-rows-20">
                <div class="place-self-center row-start-3 lg:row-start-1 lg:mt-5"><h1 class="text-7xl lg:text-4xl">TheMillionSeconds.com</h1></div>
                <div class=" place-self-center row-start-5 lg:row-start-3 lg:mb-8"><Counter/></div>
                <div class=" lg:row-span-4 place-self-center mt-10 row-start-10 lg:row-start-5"><Content/></div>
                <div class=" place-self-center row-start-14 lg:row-start-12 lg:mb-5"><Buy/></div>
                <div class=" lg:row-span-3 row-span-8 place-self-center row-start-15 lg:row-start-15"><Liste/></div>
              </div>
            }></Route>
      </Routes>
    </Router>

  )
}

export default App
