import { MapPin } from 'phosphor-react'
import logo from '../../assets/logo.svg'
import { CartButton } from '../CartButton'

export function NavBar() {
  return (
    <header className="flex items-center justify-between px-40 py-8">
      <img src={logo} alt="" />
      <div>
        <div className="flex gap-3">
          <button className="bg-purple-light text-purple-dark flex items-center justify-center gap-1 rounded p-2 text-sm hover:bg-purple-200">
            <MapPin size={22} weight="fill" />
            <span>Porto Alegre, RS</span>
          </button>
          <CartButton variant="secondary" />
        </div>
      </div>
    </header>
  )
}
