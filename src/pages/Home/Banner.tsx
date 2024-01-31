import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import coffe from '../../assets/coffee.png'
import { Label, LabelContent, LabelPrefix } from '../../components/Label'

export function Banner() {
  return (
    <article className="bg-banner flex items-center justify-between gap-14 bg-cover bg-center px-40 py-32">
      <div className="min-w-128 flex flex-col gap-4 backdrop-blur-lg">
        <h1 className=" text-5xl font-bold text-base-title">
          Encontre o café perfeito para qualquer hora do dia
        </h1>
        <p className="text-lg text-base-subtitle">
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <div className="mt-12 flex gap-12">
          <div className="flex flex-col gap-5">
            <Label>
              <LabelPrefix className="bg-yellow-dark">
                <ShoppingCart size={16} weight="fill" />
              </LabelPrefix>
              <LabelContent>Compra simples e segura</LabelContent>
            </Label>
            <Label>
              <LabelPrefix className="bg-yellow-base">
                <Timer size={16} weight="fill" />
              </LabelPrefix>
              <LabelContent>Compra simples e segura</LabelContent>
            </Label>
          </div>
          <div className="flex flex-col gap-5">
            <Label>
              <LabelPrefix className="bg-base-text">
                <Package size={16} weight="fill" />
              </LabelPrefix>
              <LabelContent>Compra simples e segura</LabelContent>
            </Label>
            <Label>
              <LabelPrefix className="bg-purple-base">
                <Coffee size={16} weight="fill" />
              </LabelPrefix>
              <LabelContent>Compra simples e segura</LabelContent>
            </Label>
          </div>
        </div>
      </div>
      <img src={coffe} alt="Imagem de um Café" />
    </article>
  )
}
