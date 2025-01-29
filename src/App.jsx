import { useState } from 'react'
import Body from './components/Body'
import Header from './components/Header'
import Footer from './components/Footer'
import Welcome from './components/Welcome'
import CounterExample from './components/CounterExample'

function App() {

  return (
    <>
      <Header />
      {/* <Welcome name="Pranav Shekhar"/> */}
      <Body />
      <Footer />
      {/* <CounterExample /> */}
    </>
  )
}

export default App
