import { NavBar } from './components/Navbar'
import { Home } from './pages/Home'

export function App() {
  return (
    <>
      <div className="h-screen bg-base-background">
        <NavBar />
        <Home />
      </div>
    </>
  )
}
