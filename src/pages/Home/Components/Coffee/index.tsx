import {
  ButtonPlusMinus,
  CoffeeElement,
  CoffeeFooter,
  CoffeeTag,
  InputPlusMinus,
  NumberInput,
} from './styles'

import { useState, FormEvent, useContext, useEffect } from 'react'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { priceFormater } from '../../../../utils/Formater'
import { COFFEE_IMAGES, CoffeeData } from '../../../../reducers/reducer'
import { CartContext } from '../../../../Context/CartContext'

interface CoffeeProps {
  coffee: CoffeeData
}

export function Coffee({ coffee }: CoffeeProps) {
  const [count, setCount] = useState(1)

  const { addCoffeeCart } = useContext(CartContext)

  useEffect(() => {
    setCount(coffee.quantidade)
  }, [])

  function handleMinus(event: FormEvent) {
    event.preventDefault()
    if (count <= 1) return
    setCount(count - 1)
  }

  function handlePlus(event: FormEvent) {
    event.preventDefault()
    setCount(count + 1)
  }

  function addCart(event: FormEvent) {
    event.preventDefault()
    const newCoffee: CoffeeData = {
      id: coffee.id,
      imagem: coffee.imagem,
      nome: coffee.nome,
      descricao: coffee.descricao,
      preco: coffee.preco,
      tags: coffee.tags,
      quantidade: count,
    }

    addCoffeeCart(newCoffee)
    console.log(newCoffee)
  }

  return (
    <CoffeeElement>
      <header>
        <img src={COFFEE_IMAGES[coffee.imagem.coffeeImage]} alt="imagemcafe" />
        <div>
          {coffee.tags.map((tag) => {
            return <CoffeeTag key={tag}>{tag}</CoffeeTag>
          })}
        </div>
      </header>

      <h1>{coffee.nome}</h1>
      <p>{coffee.descricao}</p>

      <CoffeeFooter>
        <strong>
          <span>R$</span>
          {priceFormater.format(coffee.preco)}
        </strong>

        <form action="" onSubmit={addCart}>
          <NumberInput>
            <ButtonPlusMinus onClick={handleMinus}>
              <Minus size={16} />
            </ButtonPlusMinus>
            <InputPlusMinus type="number" value={count} />
            <ButtonPlusMinus onClick={handlePlus}>
              <Plus size={16} />
            </ButtonPlusMinus>
          </NumberInput>
          <button type="submit">
            <ShoppingCart size={24} />
          </button>
        </form>
      </CoffeeFooter>
    </CoffeeElement>
  )
}
