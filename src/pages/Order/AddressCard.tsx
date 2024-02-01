import { MapPinLine } from 'phosphor-react'
import { Input } from './Input'

export function AddressCard() {
  return (
    <div className="rounded bg-base-card p-10 shadow">
      <div className="mb-8 flex gap-3">
        <MapPinLine className="text-yellow-dark" size={22} weight="fill" />
        <div>
          <p className="text-base-subtitle">Endereço de Entrega</p>
          <p className="text-sm text-base-text ">
            Informe o endereço onde deseja receber seu pedido
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col gap-3">
        <Input className="w-56" placeholder="CEP" />
        <Input className="w-full" placeholder="Rua" />
        <div className="flex gap-3">
          <Input placeholder="Número" />
          <Input className="w-full" isOptional placeholder="Complemento" />
        </div>
        <div className="flex gap-3">
          <Input className="w-56" placeholder="Bairro" />
          <Input placeholder="Cidade" />
          <Input className="max-w-16" placeholder="UF" />
        </div>
      </div>
    </div>
  )
}
