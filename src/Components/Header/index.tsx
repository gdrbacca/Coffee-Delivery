import { NavLink } from 'react-router-dom'

import { useContext } from 'react'
import logoCoffe from '../../Assets/Logo.png'
import { MapPinLine, ShoppingCart } from 'phosphor-react'
import { HeaderContainer, SelectCity } from './styles'
import { CartContext } from '../../Context/CartContext'

export function Header() {
  const { quantidadeCoffee } = useContext(CartContext)
  // console.log(quantidadeCoffee)
  return (
    <>
      <HeaderContainer>
        <NavLink to="/" title="home">
          <img src={logoCoffe} alt="" />
        </NavLink>
        <nav>
          <SelectCity>
            <label htmlFor="select-city">
              <MapPinLine size={20} />
            </label>

            <select id="select-city">
              <option value="">Porto Alegre, RS</option>
              <option value="">Blumenau, SC</option>
              <option value="">São Paulo, SP</option>
            </select>
          </SelectCity>
          <NavLink to="/cart" title="cart">
            <ShoppingCart size={24} />
            {quantidadeCoffee > 0 && <span>{quantidadeCoffee}</span>}
          </NavLink>
        </nav>
      </HeaderContainer>
    </>
  )
}
