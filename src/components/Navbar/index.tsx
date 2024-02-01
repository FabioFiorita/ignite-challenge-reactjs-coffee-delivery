import { MapPin } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { CartButton } from '../CartButton'

export function NavBar() {
  return (
    <header className="flex items-center justify-between px-40 py-8">
      <NavLink to="/" title="Início">
        <img src={logo} alt="" />
      </NavLink>
      <div>
        <div className="flex gap-3">
          <button className="flex items-center justify-center gap-1 rounded bg-purple-light p-2 text-sm text-purple-dark hover:bg-purple-200">
            <MapPin size={22} weight="fill" />
            <span>Porto Alegre, RS</span>
          </button>
          <NavLink to="/order" title="Pedido">
            <CartButton variant="secondary" />
          </NavLink>
        </div>
      </div>
    </header>
  )
}
