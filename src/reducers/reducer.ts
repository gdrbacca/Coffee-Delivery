import cafeTradicional from '../Assets/CafeTradicional.png'
import cafeAmericano from '../Assets/CafeAmericano.png'
import cafeLatte from '../Assets/CafeLatte.png'
import cafeGelado from '../Assets/CafeGelado.png'
import cafeLeite from '../Assets/CafeLeite.png'
import cafeArabe from '../Assets/CafeArabe.png'
import cafeCubano from '../Assets/CafeCubano.png'
import cafeExpresso from '../Assets/CafeExpressoCremoso.png'
import cafeHavaiano from '../Assets/CafeHavaiano.png'
import cafeIrlandes from '../Assets/CafeIrlandes.png'
import cafeCapuccino from '../Assets/Capuccino.png'
import chocolateQuente from '../Assets/Chocolate Quente.png'
import cafeMacchiato from '../Assets/Macchiato.png'
import cafeMochaccino from '../Assets/Mochaccino.png'
import { ActionTypes } from './actions'
import { produce } from 'immer'

export const COFFEE_IMAGES = {
  tradicional: cafeTradicional,
  americano: cafeAmericano,
  latte: cafeLatte,
  gelado: cafeGelado,
  leite: cafeLeite,
  arabe: cafeArabe,
  cubano: cafeCubano,
  expresso: cafeExpresso,
  havaiano: cafeHavaiano,
  irlandes: cafeIrlandes,
  capuccino: cafeCapuccino,
  chocolate: chocolateQuente,
  macchiato: cafeMacchiato,
  mocaccino: cafeMochaccino,
}

interface CoffeeImagesProps {
  coffeeImage: keyof typeof COFFEE_IMAGES
}

export interface CoffeeData {
  id: string
  imagem: CoffeeImagesProps
  tags: string[]
  nome: string
  descricao: string
  preco: number
  quantidade: number
}

interface CoffeeArray {
  coffee: CoffeeData[]
}

export function CoffeeReducer(state: CoffeeArray, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_COFFEE: {
      const selectedCoffee = state.coffee.findIndex((coffee) => {
        return coffee.id === action.payload.newCoffee.id
      })

      if (selectedCoffee < 0) {
        console.log('adicionou novo')
        return produce(state, (draft) => {
          draft.coffee.push(action.payload.newCoffee)
        })
      } else {
        console.log('somou')
        return produce(state, (draft) => {
          draft.coffee[selectedCoffee].quantidade +=
            action.payload.newCoffee.quantidade
        })
      }
    }
    case ActionTypes.REMOVE_COFFEE: {
      const selectedCoffee = state.coffee.findIndex((coffee) => {
        return coffee.id === action.payload.id
      })

      if (selectedCoffee < 0) return state
      console.log(selectedCoffee)
      return produce(state, (draft) => {
        draft.coffee = draft.coffee.filter((coffee) => {
          return coffee.id !== action.payload.id
        })
      })
    }

    case ActionTypes.CHANGE_COFFEE: {
      const selectedCoffee = state.coffee.findIndex((coffee) => {
        return coffee.id === action.payload.id
      })

      if (selectedCoffee < 0) return state

      return produce(state, (draft) => {
        if (action.payload.operation === 'minus') {
          draft.coffee[selectedCoffee].quantidade--
        } else if (action.payload.operation === 'plus') {
          draft.coffee[selectedCoffee].quantidade++
        }
      })
    }

    default:
      return state
  }
}
