import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Game from './components/Game/Game.jsx';
import Error from './components/Error/Error';
import Rankings from './components/Rankings/Rankings'
import Settings from './components/Settings/Settings.jsx'
import Credits from './components/Credits/Credits.jsx'


    


const routes = createBrowserRouter(createRoutesFromElements(
  <Route path='/'>
    <Route path='' element={<App/>}/>
    <Route path='play' element={<Game/>}/>
    <Route path='rankings' element={<Rankings/>}/>
    <Route path='settings' element={<Settings/>}/>
    <Route path='credits' element={<Credits/>}/>
    <Route path='*' element={<Error/>}/>
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>,
)
