import { createContext, useState } from 'react'
import { Coffe } from '../utils/Coffees'

interface Address {
  street: string
  number: string
  complement?: string
  neighborhood: string
  city: string
  state: string
  postalCode: string
}

export enum PaymentMethod {
  CREDIT_CARD = 'Cartão de Crédito',
  DEBIT_CARD = 'Cartão de Débito',
  CASH = 'Dinheiro',
}

interface CoffeOrder {
  coffee: Coffe
  quantity: number
}

interface OrderContextType {
  address: Address
  paymentMethod: PaymentMethod | null
  order: CoffeOrder[]
  handleAddressChange: (newAddress: Address) => void
  handlePaymentMethodChange: (newPaymentMethod: PaymentMethod) => void
  addCoffeToOrder: (coffe: Coffe, quantity: number) => void
  removeCoffeFromOrder: (coffe: Coffe) => void
}

interface OrderProviderProps {
  children: React.ReactNode
}

export const OrderContext = createContext({} as OrderContextType)

export function OrderProvider({ children }: OrderProviderProps) {
  const [address, setAddress] = useState<Address>({
    street: '',
    number: '',
    neighborhood: '',
    city: '',
    state: '',
    postalCode: '',
  })

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(null)

  const [order, setOrder] = useState<CoffeOrder[]>([])

  function handleAddressChange(newAddress: Address) {
    setAddress(newAddress)
  }

  function handlePaymentMethodChange(newPaymentMethod: PaymentMethod) {
    setPaymentMethod(newPaymentMethod)
  }

  function addCoffeToOrder(coffe: Coffe, quantity: number) {
    const newOrder = [...order]
    const index = newOrder.findIndex((item) => item.coffee.id === coffe.id)
    if (index === -1) {
      newOrder.push({ coffee: coffe, quantity })
    } else {
      newOrder[index].quantity = quantity
    }
    setOrder(newOrder)
  }

  function removeCoffeFromOrder(coffe: Coffe) {
    const newOrder = order.filter((item) => item.coffee.id !== coffe.id)
    setOrder(newOrder)
  }

  return (
    <OrderContext.Provider
      value={{
        address,
        paymentMethod,
        order,
        handleAddressChange,
        handlePaymentMethodChange,
        addCoffeToOrder,
        removeCoffeFromOrder,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}
