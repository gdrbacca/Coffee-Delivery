import {
  ReactNode,
  createContext,
  useReducer,
  useEffect,
  useState,
} from 'react'
import { CoffeeData, CoffeeReducer } from '../reducers/reducer'
import {
  addNewCoffeeAction,
  changeCoffeeAction,
  removeCoffeeAction,
} from '../reducers/actions'
import { NewDeliveryFormData } from '../pages/Cart'

interface FormData {
  cep: string
  rua: string
  numero: string
  complemento: string
  bairro: string
  cidade: string
  uf: string
  type: string
}

interface CartContextType {
  coffee: CoffeeData[]
  quantidadeCoffee: number
  form: FormData
  addCoffeeCart: (coffee: CoffeeData) => void
  removeCoffeeCart: (id: string) => void
  changeCoffeeCart: (id: string, operation: string) => void
  finalizaForm: (form: NewDeliveryFormData) => void
  zeraCart: () => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [coffeeArray, dispatch] = useReducer(
    CoffeeReducer,
    {
      coffee: [],
    },
    (initialState) => {
      console.log('passou no initialState')
      const storedStateJSON = localStorage.getItem(
        '@coffee-delivery:state-1.0.0',
      )

      if (storedStateJSON) return JSON.parse(storedStateJSON)

      return initialState
    },
  )

  const { coffee } = coffeeArray
  const [quantidadeCoffee, setQuantidadeCoffee] = useState(0)
  const [form, setForm] = useState({} as FormData)

  useEffect(() => {
    const stateJSON = JSON.stringify(coffeeArray)
    setQuantidadeCoffee(coffeeArray.coffee.length)
    localStorage.setItem('@coffee-delivery:state-1.0.0', stateJSON)
  }, [coffeeArray])

  function addCoffeeCart(coffee: CoffeeData) {
    const newCoffee: CoffeeData = {
      id: coffee.id,
      imagem: coffee.imagem,
      tags: coffee.tags,
      nome: coffee.nome,
      descricao: coffee.descricao,
      preco: coffee.preco,
      quantidade: coffee.quantidade,
    }

    dispatch(addNewCoffeeAction(newCoffee))
    setQuantidadeCoffee((qtd) => {
      return (qtd = qtd + 1)
    })
    console.log(coffeeArray)
  }

  function removeCoffeeCart(id: string) {
    // console.log(id)
    dispatch(removeCoffeeAction(id))
    setQuantidadeCoffee((qtd) => {
      return (qtd = qtd - 1)
    })
  }

  function zeraCart() {
    coffee.map((coffeeItem) => {
      return removeCoffeeCart(coffeeItem.id)
    })
  }

  function changeCoffeeCart(id: string, operation: string) {
    dispatch(changeCoffeeAction(id, operation))
  }

  function finalizaForm(form: NewDeliveryFormData) {
    console.log(form)
    const formulario: FormData = {
      cep: form.cep,
      rua: form.rua,
      numero: form.numero,
      complemento: form.complemento ? form.complemento : '',
      bairro: form.bairro,
      cidade: form.cidade,
      uf: form.uf,
      type: form.type,
    }

    setForm(formulario)
  }

  return (
    <CartContext.Provider
      value={{
        coffee,
        quantidadeCoffee,
        form,
        addCoffeeCart,
        removeCoffeeCart,
        changeCoffeeCart,
        finalizaForm,
        zeraCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
