import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext } from 'react'
import { Label, LabelContent, LabelPrefix } from '../../components/Label'
import { OrderContext } from '../../contexts/OrderContext'

export function OrderInfo() {
  const { address, paymentMethod } = useContext(OrderContext)
  return (
    <article className="flex min-w-128 flex-col items-start justify-center gap-8 rounded-bl-3xl rounded-tr-3xl border border-purple-base p-10">
      <Label>
        <LabelPrefix className="bg-purple-base">
          <MapPin size={16} weight="fill" />
        </LabelPrefix>
        <LabelContent>
          <div>
            <p>
              Entrega em{' '}
              <span className="font-bold">{`${address.street}, ${address.number} ${address.complement ? `- ${address.complement}` : ''}`}</span>
            </p>
            <p>{`${address.neighborhood}, ${address.city} - ${address.state}`}</p>
          </div>
        </LabelContent>
      </Label>
      <Label>
        <LabelPrefix className="bg-yellow-base">
          <Timer size={16} weight="fill" />
        </LabelPrefix>
        <LabelContent>
          <div>
            <p>Previsão de entrega</p>
            <p className="font-bold">20 min - 30 min </p>
          </div>
        </LabelContent>
      </Label>
      <Label>
        <LabelPrefix className="bg-yellow-dark">
          <CurrencyDollar size={16} weight="fill" />
        </LabelPrefix>
        <LabelContent>
          <div>
            <p>Pagamento na entrega</p>
            <p className="font-bold">{paymentMethod}</p>
          </div>
        </LabelContent>
      </Label>
    </article>
  )
}
