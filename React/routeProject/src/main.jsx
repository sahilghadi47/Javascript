import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import Layout from './Layout'
import { Route, RouterProvider , createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import { About, Contact, GitPage, Home } from './components'
import { githubData } from './components/Git_Page/GitPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home />} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/git-hub-profile' element={< GitPage/>} loader={githubData} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
