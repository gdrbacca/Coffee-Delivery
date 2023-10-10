import { useContext, useMemo } from 'react'
import { CartContext } from '../Context/CartContext'

export function useTotalCart() {
  const { coffee } = useContext(CartContext)

  const totalCart = useMemo(() => {
    return coffee.reduce(
      (acc, item) => {
        acc.total += item.preco * item.quantidade

        return acc
      },
      {
        total: 0,
      },
    )
  }, [coffee])

  return totalCart
}
