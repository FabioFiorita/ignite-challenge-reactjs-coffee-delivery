import { Minus, Plus } from 'phosphor-react'
import { useState } from 'react'

export function Stepper() {
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
  )
}
