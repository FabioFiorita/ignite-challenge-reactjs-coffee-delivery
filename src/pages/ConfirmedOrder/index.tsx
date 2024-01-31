import orderSucess from '../../assets/orderSucess.png'
import { OrderInfo } from './OrderInfo'

export function ConfirmedOrder() {
  return (
    <main className="h-screen w-screen px-40 py-20">
      <div className="flex items-end justify-center gap-x-24">
        <div className="flex flex-col gap-10">
          <header className="flex-1">
            <h1 className="text-nowrap text-4xl text-yellow-dark">
              Uhu! Pedido confirmado
            </h1>
            <p className="text-nowrap text-lg text-base-subtitle">
              Agora é só aguardar que logo o café chegará até você
            </p>
          </header>
          <OrderInfo />
        </div>

        <aside>
          <img src={orderSucess} alt="" />
        </aside>
      </div>
    </main>
  )
}
