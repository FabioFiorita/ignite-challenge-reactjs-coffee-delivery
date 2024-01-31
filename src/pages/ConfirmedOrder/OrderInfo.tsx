import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { Label, LabelContent, LabelPrefix } from '../../components/Label'

export function OrderInfo() {
  return (
    <article className="min-w-128 flex flex-col items-start justify-center gap-8 rounded-bl-3xl rounded-tr-3xl border border-purple-base p-10">
      <Label>
        <LabelPrefix className="bg-purple-base">
          <MapPin size={16} weight="fill" />
        </LabelPrefix>
        <LabelContent>
          <div>
            <p>
              Entrega em{' '}
              <span className="font-bold">Rua João Daniel Martinelli, 102</span>
            </p>
            <p>Farrapos - Porto Alegre, RS</p>
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
            <p className="font-bold">Cartão de Crédito</p>
          </div>
        </LabelContent>
      </Label>
    </article>
  )
}
