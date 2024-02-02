import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { useContext } from 'react'
import { OrderContext, PaymentMethod } from '../../contexts/OrderContext'

export function PaymentCard() {
  const { paymentMethod, handlePaymentMethodChange } = useContext(OrderContext)

  return (
    <div className="rounded bg-base-card p-10 shadow">
      <div className="mb-8 flex gap-3">
        <CurrencyDollar className="text-purple-base" size={22} weight="fill" />
        <div>
          <p className="text-base-subtitle">Pagamento</p>
          <p className="text-sm text-base-text ">
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </div>
      <div className="flex gap-3">
        <button
          onClick={() => handlePaymentMethodChange(PaymentMethod.CREDIT_CARD)}
        >
          <div
            className={`flex items-center justify-center gap-3 rounded ${paymentMethod === PaymentMethod.CREDIT_CARD ? 'bg-purple-300' : 'bg-base-button'}  p-4 hover:bg-purple-100`}
          >
            <CreditCard className="text-purple-base" size={16} />
            <span className="uppercase text-base-text">Cartão de crédito</span>
          </div>
        </button>
        <button
          onClick={() => handlePaymentMethodChange(PaymentMethod.DEBIT_CARD)}
        >
          <div
            className={`flex items-center justify-center gap-3 rounded ${paymentMethod === PaymentMethod.DEBIT_CARD ? 'bg-purple-300' : 'bg-base-button'}  p-4 hover:bg-purple-100`}
          >
            <Bank className="text-purple-base" size={16} />
            <span className="uppercase text-base-text">cartão de débito</span>
          </div>
        </button>
        <button onClick={() => handlePaymentMethodChange(PaymentMethod.CASH)}>
          <div
            className={`flex items-center justify-center gap-3 rounded ${paymentMethod === PaymentMethod.CASH ? 'bg-purple-300' : 'bg-base-button'}  p-4 hover:bg-purple-100`}
          >
            <Money className="text-purple-base" size={16} />
            <span className="uppercase text-base-text">dinheiro</span>
          </div>
        </button>
      </div>
    </div>
  )
}
