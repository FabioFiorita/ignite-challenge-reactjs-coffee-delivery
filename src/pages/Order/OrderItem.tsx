import { Trash } from 'phosphor-react'
import { useContext, useState } from 'react'
import { Stepper } from '../../components/Stepper'
import { OrderContext } from '../../contexts/OrderContext'
import { Coffe } from '../../utils/Coffees'

interface OrderItemProps {
  coffe: Coffe
  quantity: number
}

export function OrderItem({ coffe, quantity }: OrderItemProps) {
  const [amount, setAmount] = useState(quantity)
  const { addCoffeToOrder, removeCoffeFromOrder } = useContext(OrderContext)

  function onAmountChange(newAmount: number) {
    setAmount(newAmount)
    addCoffeToOrder(coffe, newAmount)
  }

  function handleRemoveCoffeFromOrder() {
    removeCoffeFromOrder(coffe)
  }

  return (
    <div className="flex items-start justify-between">
      <div className="mb-6 flex">
        <img
          className="mr-5 max-h-20 select-none"
          src={coffe.image}
          alt={coffe.title}
        />
        <div>
          <p className="select-none text-base-subtitle">{coffe.title}</p>
          <div className="flex items-center justify-start gap-2">
            <Stepper amount={amount} onAmountChange={onAmountChange} />
            <button
              className="flex items-center gap-2 rounded bg-base-button p-2 hover:bg-slate-300"
              onClick={handleRemoveCoffeFromOrder}
            >
              <Trash className="text-purple-base" size={16} />
              <span className="select-none text-sm uppercase text-base-text">
                Remover
              </span>
            </button>
          </div>
        </div>
      </div>
      <h3 className="select-none text-base-text">
        {' '}
        {new Intl.NumberFormat('pt-BR', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }).format(coffe.price)}
      </h3>
    </div>
  )
}
