import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import userContext from './utils/userContext'

function App() {

  const [userName, setUserName] = useState("John Cena");

  return (
    <div className="min-h-screen flex flex-col">
        <Header />
      <userContext.Provider value={{loggedInUser: userName, setUserName}}>
        <main className="flex-grow">
        <Outlet />
        </main>
        <Footer />
      </userContext.Provider>
    </div>
  )
}

export default App
