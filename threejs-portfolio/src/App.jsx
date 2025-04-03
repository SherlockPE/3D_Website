import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import React from 'react'
import "tailwindcss";
import NavBar from './sections/nav_bar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>

      <NavBar/>
      <h1 class="text-3xl font-bold underline text-center">
        Hello there
      </h1>

    </main>
  )
}

export default App
