import { Minus, Plus } from 'phosphor-react'

interface StepperProps {
  amount: number
  onAmountChange: (amount: number) => void
}

export function Stepper({ amount, onAmountChange }: StepperProps) {
  function increaseAmount() {
    if (amount >= 99) {
      return onAmountChange(99)
    }
    onAmountChange(amount + 1)
  }

  function decreaseAmount() {
    if (amount <= 0) {
      return onAmountChange(0)
    }
    onAmountChange(amount - 1)
  }

  return (
    <div className="flex items-center gap-1 rounded-sm bg-base-button p-2">
      <Minus
        size={14}
        weight="bold"
        className="cursor-pointer text-purple-base"
        onClick={decreaseAmount}
      />
      <span className="select-none text-base-title">{amount}</span>
      <Plus
        size={14}
        weight="bold"
        className="cursor-pointer text-purple-base"
        onClick={increaseAmount}
      />
    </div>
  )
}
