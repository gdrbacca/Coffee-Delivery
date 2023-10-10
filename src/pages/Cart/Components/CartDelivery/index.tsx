import { useFormContext } from 'react-hook-form'
import {
  DeliveryButton,
  DeliveryData,
  DeliverySection,
  MainCartDelivery,
} from './styles'
import { CoffeeCart } from '../CoffeeCart'
import { useContext } from 'react'
import { CartContext } from '../../../../Context/CartContext'
import { useTotalCart } from '../../../../hooks/useTotalCart'
import { priceFormater } from '../../../../utils/Formater'

export function CartDelivery() {
  const {
    formState: { isSubmitting },
  } = useFormContext()

  const { quantidadeCoffee, coffee } = useContext(CartContext)
  const entrega = 3.5 // feio

  const totalCart = useTotalCart()
  return (
    <MainCartDelivery>
      <h1>Cafés Selecionados</h1>
      <DeliverySection>
        {coffee.map((itemCoffee) => {
          return (
            <div key={itemCoffee.id}>
              <CoffeeCart key={itemCoffee.id} coffeeParam={itemCoffee} />
              <hr />
            </div>
          )
        })}

        <DeliveryData>
          <tr>
            <td>Total de itens</td>
            <td>
              R${' '}
              {totalCart.total > 0
                ? priceFormater.format(totalCart.total)
                : '0,00'}
            </td>
          </tr>
          <tr>
            <td>Entrega</td>
            <td>R$ {priceFormater.format(entrega)}</td>
          </tr>
          <tr>
            <td>Total</td>
            <td>R$ {priceFormater.format(totalCart.total + entrega)}</td>
          </tr>
        </DeliveryData>
        <DeliveryButton
          type="submit"
          disabled={quantidadeCoffee === 0 || isSubmitting}
        >
          CONFIRMAR PEDIDO
        </DeliveryButton>
      </DeliverySection>
    </MainCartDelivery>
  )
}
