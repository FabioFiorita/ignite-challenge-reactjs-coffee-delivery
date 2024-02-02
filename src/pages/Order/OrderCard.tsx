import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { OrderContext } from '../../contexts/OrderContext'
import { OrderItem } from './OrderItem'

export function OrderCard() {
  const { order } = useContext(OrderContext)

  const orderPrice = order.reduce(
    (total, order) => total + order.coffee.price * order.quantity,
    0,
  )

  const deliveryPrice = 3.5

  const orderPriceWithDelivery = orderPrice + deliveryPrice

  return (
    <div className="min-w-128 rounded-bl-3xl rounded-br rounded-tl rounded-tr-3xl bg-base-card p-10 shadow">
      {order.map((order) => (
        <OrderItem
          key={order.coffee.id}
          coffe={order.coffee}
          quantity={order.quantity}
        />
      ))}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between text-sm text-base-text">
          <p>Total de itens</p>
          <p>
            {new Intl.NumberFormat('pt-BR', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
              currency: 'BRL',
              style: 'currency',
            }).format(orderPrice)}
          </p>
        </div>
        <div className="flex items-center justify-between text-sm text-base-text">
          <p>Entrega</p>
          <p>
            {new Intl.NumberFormat('pt-BR', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
              currency: 'BRL',
              style: 'currency',
            }).format(deliveryPrice)}
          </p>
        </div>
        <div className="flex items-center justify-between text-lg text-base-subtitle">
          <h3>Total</h3>
          <h3>
            {new Intl.NumberFormat('pt-BR', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
              currency: 'BRL',
              style: 'currency',
            }).format(orderPriceWithDelivery)}
          </h3>
        </div>
        <NavLink
          className="bold mt-3 flex items-center justify-center rounded bg-yellow-base py-3 uppercase text-white hover:bg-yellow-600"
          to="/confirmedOrder"
          title="Pedido Confirmado"
        >
          <span>confirmar pedido</span>
        </NavLink>
      </div>
    </div>
  )
}
