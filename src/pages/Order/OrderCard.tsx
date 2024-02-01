import { Trash } from 'phosphor-react'
import americano from '../../assets/americano.png'
import { Stepper } from '../../components/Stepper'

export function OrderCard() {
  return (
    <div className="min-w-128 rounded-bl-3xl rounded-br rounded-tl rounded-tr-3xl bg-base-card p-10 shadow">
      <div className="flex items-start justify-between">
        <div className="mb-6 flex">
          <img className="mr-5 max-h-20" src={americano} alt="" />
          <div>
            <p className="text-base-subtitle">Expresso Tradicional</p>
            <div className="flex items-center justify-start gap-2">
              <Stepper />
              <button className="flex items-center gap-2 rounded bg-base-button p-2 hover:bg-slate-300">
                <Trash className="text-purple-base" size={16} />
                <span className="text-sm uppercase text-base-text">
                  Remover
                </span>
              </button>
            </div>
          </div>
        </div>
        <h3 className="text-base-text">R$ 9,90</h3>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between text-sm text-base-text">
          <p>Total de itens</p>
          <p>R$ 29,70</p>
        </div>
        <div className="flex items-center justify-between text-sm text-base-text">
          <p>Entrega</p>
          <p>R$ 3,50</p>
        </div>
        <div className="flex items-center justify-between text-lg text-base-subtitle">
          <h3>Total</h3>
          <h3>R$ 33,20</h3>
        </div>
        <button className="bold mt-3 flex items-center justify-center rounded bg-yellow-base py-3 uppercase text-white">
          <span>confirmar pedido</span>
        </button>
      </div>
    </div>
  )
}
