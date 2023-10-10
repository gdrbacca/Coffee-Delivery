import { useFormContext, Controller } from 'react-hook-form'
import {
  DescriptionSection,
  FieldsSection,
  InputComplemento,
  InputSection,
  MainFormDelivery,
  PaymentButton,
  PaymentSection,
  PaymentType,
} from './styles'
import {
  Bank,
  CreditCard,
  CurrencyDollarSimple,
  MapPinLine,
  Money,
} from 'phosphor-react'

export function FormDelivery() {
  const { register, control } = useFormContext()

  return (
    <MainFormDelivery>
      <h1>Complete seu pedido</h1>
      <InputSection>
        <DescriptionSection variant="address">
          <tr>
            <td>
              <MapPinLine size={24} />
            </td>
            <td>
              <span>
                Endereço de entrega
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </span>
            </td>
          </tr>
        </DescriptionSection>

        <FieldsSection>
          <tr>
            <td>
              <input
                type="text"
                placeholder="CEP"
                {...register('cep')}
                required
              />
            </td>
          </tr>

          <tr>
            <td colSpan={3}>
              <input
                type="text"
                placeholder="Rua"
                {...register('rua')}
                required
              />
            </td>
          </tr>

          <tr>
            <td>
              <input
                type="text"
                placeholder="Número"
                {...register('numero')}
                required
              />
            </td>
            <td colSpan={2}>
              <InputComplemento data-required="opcional">
                <input
                  type="text"
                  placeholder="Complemento"
                  {...register('complemento')}
                />
              </InputComplemento>
            </td>
          </tr>
          <tr>
            <td>
              <input
                type="text"
                placeholder="Bairro"
                {...register('bairro')}
                required
              />
            </td>
            <td>
              <input
                type="text"
                placeholder="Cidade"
                {...register('cidade')}
                required
              />
            </td>
            <td>
              <input
                type="text"
                placeholder="UF"
                {...register('uf')}
                required
              />
            </td>
          </tr>
          <tr></tr>
        </FieldsSection>
      </InputSection>

      <PaymentSection>
        <DescriptionSection variant="payment">
          <tr>
            <td>
              <CurrencyDollarSimple size={24} />
            </td>
            <td>
              <span>
                Pagamento
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </span>
            </td>
          </tr>
        </DescriptionSection>

        <Controller
          control={control}
          name="type"
          render={({ field }) => {
            return (
              <PaymentType onValueChange={field.onChange} value={field.value}>
                <PaymentButton value="credito">
                  <CreditCard size={20} />
                  CARTÃO DE CRÉDITO
                </PaymentButton>
                <PaymentButton value="debito">
                  <Bank size={20} />
                  CARTÃO DE DÉBITO
                </PaymentButton>
                <PaymentButton value="dinheiro">
                  <Money size={20} />
                  DINHEIRO
                </PaymentButton>
              </PaymentType>
            )
          }}
        />
      </PaymentSection>
    </MainFormDelivery>
  )
}
