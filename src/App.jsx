import { useState } from 'react'
import Body from './components/Body'
import Header from './components/Header'
import Footer from './components/Footer'
import Welcome from './components/welcome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Welcome name="Pranav Shekhar"/>
      <Body />
      <Footer />
    </>
  )
}

export default App
