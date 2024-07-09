import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './Layout/RootLayout'
import LandingPage from './pages/LandingPage'
import Event from './pages/Event'
import College from './pages/College'
import CreateEvent from './pages/CreateEvent'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import NotFound from './pages/NotFound'

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout/>,
      children: [
        {
          index: true,
          element: <LandingPage/>
        },
        {
          path: "event",
          element: <Event/>
        },
        {
          path: "college",
          element: <College/>
        },
        {
          path: "notfound",
          element: <NotFound/>
        }
      ]

    },
    {
      path: "event/create",
      element: <CreateEvent/>
    },
    {
      path: "signup",
      element: <SignUp/>

    },
    {
      path: "signin",
      element: <SignIn/>
    },
  ])
  return (
    <RouterProvider router={router} />
  )
}

export default App