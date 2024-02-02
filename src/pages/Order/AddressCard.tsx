import { MapPinLine } from 'phosphor-react'
import { useContext } from 'react'
import { OrderContext } from '../../contexts/OrderContext'
import { Input } from './Input'

export function AddressCard() {
  const { address, handleAddressChange } = useContext(OrderContext)

  function onAddressChange(event: React.ChangeEvent<HTMLInputElement>) {
    const updatedAddress = {
      ...address,
      [event.target.name]: event.target.value,
    }
    handleAddressChange(updatedAddress)
  }

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
        <Input
          className="w-56"
          placeholder="CEP"
          name="postalCode"
          value={address.postalCode}
          onChange={onAddressChange}
        />
        <Input
          className="w-full"
          placeholder="Rua"
          name="street"
          value={address.street}
          onChange={onAddressChange}
        />
        <div className="flex gap-3">
          <Input
            placeholder="Número"
            name="number"
            type="number"
            value={address.number}
            onChange={onAddressChange}
          />
          <Input
            className="w-full"
            isOptional
            placeholder="Complemento"
            name="complement"
            value={address.complement}
            onChange={onAddressChange}
          />
        </div>
        <div className="flex gap-3">
          <Input
            className="w-56"
            placeholder="Bairro"
            name="neighborhood"
            value={address.neighborhood}
            onChange={onAddressChange}
          />
          <Input
            className="w-full"
            placeholder="Cidade"
            name="city"
            value={address.city}
            onChange={onAddressChange}
          />
          <Input
            className="max-w-16"
            placeholder="UF"
            name="state"
            maxLength={2}
            value={address.state.toUpperCase()}
            onChange={onAddressChange}
          />
        </div>
      </div>
    </div>
  )
}
