import './App.css'
import { NavLink, Outlet } from 'react-router-dom';



function App() {

  // const exit = () => {
  //   window.top.close();
  // }

  return (
    <>
      <Outlet/>
      <div className="ping-pong">
        <NavLink className='link' to='/play'>Play</NavLink>
        <NavLink className='link' to='/rankings'>Rankings</NavLink>
        <NavLink className='link' to='/settings'>Settings</NavLink>
        <NavLink className='link' to='/credits'>Credits</NavLink>
      </div>
    </>
  );
}

export default App
