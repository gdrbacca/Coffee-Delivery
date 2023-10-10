import {
  IconBackground,
  PresentationContainer,
  PresentationImage,
  PresentationText,
} from './styles'
import { Package, ShoppingCart, Timer, Coffee } from 'phosphor-react'

import imagemCafe from '../../../../Assets/ImagemCafe.png'

export function HomePresentation() {
  return (
    <PresentationContainer>
      <PresentationText>
        <h1>
          Encontre o café perfeito <br /> para qualquer hora do dia
        </h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a <br />{' '}
          qualquer hora
        </p>

        <table>
          <tbody>
            <tr>
              <td>
                <IconBackground iconColor="YellowDark">
                  <ShoppingCart size={16} />
                </IconBackground>
                Compra simples e segura
              </td>
              <td>
                <IconBackground iconColor="Gray">
                  <Package />
                </IconBackground>
                Embalagem mantém o café intacto
              </td>
            </tr>
            <tr>
              <td>
                <IconBackground iconColor="Yellow">
                  <Timer />
                </IconBackground>
                Entrega rápida e rastreada
              </td>
              <td>
                <IconBackground iconColor="Purple">
                  <Coffee />
                </IconBackground>
                O café chega fresquinho até você
              </td>
            </tr>
          </tbody>
        </table>
      </PresentationText>

      <PresentationImage>
        <img src={imagemCafe} alt="imagemCafé" />
      </PresentationImage>
    </PresentationContainer>
  )
}
