import { Coffee } from './Components/Coffee'
import { HomePresentation } from './Components/HomePresentation'
import { Coffees } from './coffees'
import { ListCoffes, TituloLista } from './styles'

export function Home() {
  return (
    <div>
      <HomePresentation />
      <TituloLista>Nossos cafés</TituloLista>
      <ListCoffes>
        <ul>
          {Coffees.map((cafe) => {
            return (
              <li key={cafe.id}>
                <Coffee key={cafe.id} coffee={cafe} />
              </li>
            )
          })}
        </ul>
      </ListCoffes>
    </div>
  )
}
