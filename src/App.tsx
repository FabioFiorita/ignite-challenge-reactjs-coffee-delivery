import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

export function App() {
  return (
    <>
      <div className="h-screen bg-base-background">
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </div>
    </>
  )
}
