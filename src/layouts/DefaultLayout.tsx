import { Outlet } from 'react-router-dom'
import { NavBar } from '../components/Navbar'

export function DefaultLayout() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  )
}
