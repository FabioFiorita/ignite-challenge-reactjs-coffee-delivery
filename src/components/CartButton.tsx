import { ShoppingCart } from 'phosphor-react'
import { ButtonHTMLAttributes, useContext } from 'react'
import { VariantProps, tv } from 'tailwind-variants'
import { OrderContext } from '../contexts/OrderContext'

const cartButton = tv({
  base: ['rounded p-2 relative'],
  variants: {
    variant: {
      primary: 'text-base-card bg-purple-dark hover:bg-purple-200',
      secondary: 'bg-yellow-light text-yellow-dark  hover:bg-yellow-200',
    },
  },
})

export type CartButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof cartButton>

export function CartButton({ variant, ...props }: CartButtonProps) {
  const { order } = useContext(OrderContext)

  const totalItems = order.reduce((acc, { quantity }) => acc + quantity, 0)

  return (
    <button {...props} className={cartButton({ variant })}>
      {variant === 'secondary' && (
        <span className="absolute -right-4 -top-4 flex h-6 w-6 items-center justify-center rounded-full bg-yellow-dark text-sm text-white">
          {totalItems}
        </span>
      )}
      <ShoppingCart size={22} weight="fill" />
    </button>
  )
}
