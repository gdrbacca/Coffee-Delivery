import { Minus, Plus, Trash } from 'phosphor-react'
import {
  ButtonPlusMinus,
  ButtonRemove,
  CoffeeElementCart,
  InputPlusMinus,
  NumberInput,
} from './styles'
import { FormEvent, useEffect, useState, useContext } from 'react'
import { COFFEE_IMAGES, CoffeeData } from '../../../../reducers/reducer'
import { priceFormater } from '../../../../utils/Formater'
import { CartContext } from '../../../../Context/CartContext'

interface CoffeeCartProps {
  coffeeParam: CoffeeData
}

export function CoffeeCart({ coffeeParam }: CoffeeCartProps) {
  const [count, setCount] = useState(0)

  const { changeCoffeeCart, removeCoffeeCart } = useContext(CartContext)

  useEffect(() => {
    setCount(coffeeParam.quantidade)
  }, [])

  function Remover(event: FormEvent) {
    event.preventDefault()
    removeCoffeeCart(coffeeParam.id)
  }

  function handleMinus(event: FormEvent) {
    event.preventDefault()
    if (count <= 1) return
    setCount(count - 1)
    changeCoffeeCart(coffeeParam.id, 'minus')
  }

  function handlePlus(event: FormEvent) {
    event.preventDefault()
    setCount(count + 1)
    changeCoffeeCart(coffeeParam.id, 'plus')
  }
  return (
    <CoffeeElementCart>
      <img src={COFFEE_IMAGES[coffeeParam.imagem.coffeeImage]} alt="" />
      <div>
        <h1>Expresso Tradicional</h1>
        <footer>
          <NumberInput>
            <ButtonPlusMinus onClick={handleMinus}>
              <Minus size={16} />
            </ButtonPlusMinus>
            <InputPlusMinus type="number" value={count} />
            <ButtonPlusMinus onClick={handlePlus}>
              <Plus size={16} />
            </ButtonPlusMinus>
          </NumberInput>

          <ButtonRemove onClick={Remover}>
            <Trash size={20} />
            REMOVER
          </ButtonRemove>
        </footer>
      </div>

      <span>R$ {priceFormater.format(coffeeParam.preco)}</span>
    </CoffeeElementCart>
  )
}
