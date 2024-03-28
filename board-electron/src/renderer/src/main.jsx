import React from 'react'
import ReactDOM from 'react-dom/client'
import {Route, RouterProvider, createBrowserRouter,createRoutesFromElements, useRoutes } from 'react-router-dom'
import Layout from './layout'
import AddUser from './components/Pages/AddUser'
import './assets/base.css'
import DataTable from './components/Pages/Home'


// const router = createBrowserRouter([
//   {
//     path : '/',
//     element: <Layout/>,
//     children:[
//       {
//         path : '',
//       element : <Home/>
//       },
//       {
//         path : 'About',
//         element : <About/>
//       },
//       {
//         path: 'Contact',
//         element: <Contact/>   
//        },
//        {
//         path:'user/:userid',
//         element: <User/>
//        },
//        {
//         path:'Github',
//         element:<Github/>,
//          loader: {githubinfoloader}
//        }
//     ]
//   }
 
// ])

// useRoutes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      
      <Route path='home' element={<DataTable />} />
      <Route path='adduser' element={<AddUser />} />
      
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
