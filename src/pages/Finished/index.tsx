import {
  Filler,
  FinishedContainer,
  FinishedData,
  FinishedImage,
  FinishedText,
  IconBackground,
} from './styles'

import imagemFinished from '../../Assets/ImagemMoto.png'
import { CurrencyDollar, MapPinLine, Timer } from 'phosphor-react'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

export function Finished() {
  const { form } = useContext(CartContext)
  return (
    <FinishedContainer>
      <FinishedText>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>

        <FinishedData>
          <Filler>
            <table>
              <tr>
                <td>
                  <IconBackground iconColor="Purple">
                    <MapPinLine size={16} />
                  </IconBackground>
                </td>
                <td>
                  <div>
                    Entrega em{' '}
                    <strong>
                      {form.rua}, {form.numero}
                    </strong>
                    <p>
                      {form.bairro} - {form.cidade}, {form.uf}
                    </p>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <IconBackground iconColor="Yellow">
                    <Timer size={16} />
                  </IconBackground>
                </td>
                <td>
                  <div>
                    Previsão de entrega
                    <p>
                      <strong>20 min - 30 min</strong>
                    </p>
                  </div>
                </td>
              </tr>
              <tr>
                <td rowSpan={2}>
                  <IconBackground iconColor="YellowDark">
                    <CurrencyDollar size={16} />
                  </IconBackground>
                </td>
                <td>
                  <div>
                    Pagamento na entrega
                    <p>
                      <strong>{form.type}</strong>
                    </p>
                  </div>
                </td>
              </tr>
            </table>
          </Filler>
        </FinishedData>
      </FinishedText>

      <FinishedImage>
        <img src={imagemFinished} alt="" />
      </FinishedImage>
    </FinishedContainer>
  )
}
