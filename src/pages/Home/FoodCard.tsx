import { Minus, Plus } from 'phosphor-react'
import { useState } from 'react'
import { CartButton } from '../../components/CartButton'
import { Coffe } from './Coffees'

interface FoodCardProps {
  coffe: Coffe
}

export function FoodCard({ coffe }: FoodCardProps) {
  const [amount, setAmount] = useState(1)

  function increaseAmount() {
    if (amount >= 99) {
      return setAmount(99)
    }
    setAmount((prevState) => prevState + 1)
  }

  function decreaseAmount() {
    if (amount <= 0) {
      return setAmount(0)
    }
    setAmount((prevState) => prevState - 1)
  }

  return (
    <div className="flex select-none flex-col items-center justify-between rounded-bl-3xl rounded-br-lg rounded-tl-lg rounded-tr-3xl bg-base-card px-5 pb-5">
      <div className="flex flex-col items-center">
        <img className="-m-5 mb-3" src={coffe.image} alt={coffe.title} />
        <div className="flex gap-1">
          {coffe.tags.map((tag) => (
            <p
              key={tag.id}
              className="mb-4 rounded-3xl bg-yellow-light px-2 py-1 text-xs font-bold uppercase text-yellow-dark"
            >
              {tag.title}
            </p>
          ))}
        </div>
        <h3 className="mb-2 text-lg">{coffe.title}</h3>
        <p className="mb-8 text-center">{coffe.description}</p>
      </div>

      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-1 text-base-text">
          <span className="text-sm">R$</span>
          <h3 className="text-2xl">
            {new Intl.NumberFormat('pt-BR', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }).format(coffe.price)}
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 rounded-sm bg-base-button p-2">
            <Minus
              size={14}
              weight="bold"
              className="cursor-pointer text-purple-base"
              onClick={decreaseAmount}
            />
            <span className="text-base-title">{amount}</span>
            <Plus
              size={14}
              weight="bold"
              className="cursor-pointer text-purple-base"
              onClick={increaseAmount}
            />
          </div>
          <CartButton variant="primary" />
        </div>
      </div>
    </div>
  )
}
