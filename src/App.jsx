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
              <div class="select-none h-[98vh] grid grid-rows-10">
                <div class="place-self-center"><h1 class="text-4xl">TheMillionSeconds.com</h1></div>
                <div class=" place-self-center"><Counter/></div>
                <div class=" row-span-4 place-self-center mt-10"><Content/></div>
                <div class=" place-self-center"><Buy/></div>
                <div class=" row-span-3 place-self-center"><Liste/></div>
              </div>
            }></Route>
      </Routes>
    </Router>

  )
}

export default App
