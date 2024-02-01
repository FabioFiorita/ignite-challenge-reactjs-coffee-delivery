import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'

export function PaymentCard() {
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
        <button>
          <div className="flex items-center justify-center gap-3 rounded bg-base-button p-4 hover:bg-slate-300">
            <CreditCard className="text-purple-base" size={16} />
            <span className="uppercase text-base-text">Cartão de crédito</span>
          </div>
        </button>
        <button>
          <div className="flex items-center justify-center gap-3 rounded bg-base-button p-4 hover:bg-slate-300">
            <Bank className="text-purple-base" size={16} />
            <span className="uppercase text-base-text">cartão de débito</span>
          </div>
        </button>
        <button>
          <div className="flex items-center justify-center gap-3 rounded bg-base-button p-4 hover:bg-slate-300">
            <Money className="text-purple-base" size={16} />
            <span className="uppercase text-base-text">dinheiro</span>
          </div>
        </button>
      </div>
    </div>
  )
}
