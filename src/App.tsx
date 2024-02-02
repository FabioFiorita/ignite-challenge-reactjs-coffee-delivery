import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { OrderProvider } from './contexts/OrderContext'

export function App() {
  return (
    <>
      <div className="h-screen bg-base-background">
        <BrowserRouter>
          <OrderProvider>
            <Router />
          </OrderProvider>
        </BrowserRouter>
      </div>
    </>
  )
}
