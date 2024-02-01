import { AddressCard } from './AddressCard'
import { OrderCard } from './OrderCard'
import { PaymentCard } from './PaymentCard'

export function Order() {
  return (
    <main className="flex h-screen items-start justify-start gap-8 bg-base-background px-40 py-10">
      <div>
        <h2 className="mb-3 text-lg text-base-subtitle">Complete seu pedido</h2>
        <article className="flex flex-col gap-3">
          <AddressCard />
          <PaymentCard />
        </article>
      </div>
      <div>
        <h2 className="mb-3 text-lg text-base-subtitle">Cafés selecionados</h2>
        <aside>
          <OrderCard />
        </aside>
      </div>
    </main>
  )
}
