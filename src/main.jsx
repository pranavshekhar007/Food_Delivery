import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Search from './components/Search.jsx'
import SignIn from './components/SignIn.jsx'
import ResturantDetails from './components/ResturantDetails.jsx'
import Body from './components/Body.jsx'
import Error from './components/Error.jsx'

const appRoter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement : <Error />,
    children: [
      {
        path: "/",
        element: <Body/>
      },
      {
        path:"/search",
        element: <Search />
      },
      {
        path: "/signIn",
        element: <SignIn />
      },
      {
        path: "/resturant/:id",
        element: <ResturantDetails />
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={appRoter} />
)
