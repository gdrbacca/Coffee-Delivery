import { useForm, FormProvider } from 'react-hook-form'
import { CartDelivery } from './Components/CartDelivery'
import { FormDelivery } from './Components/FormDelivery'
import { Wrapper } from './styles'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { useNavigate } from 'react-router-dom'

const newDeliveryValidationSchema = zod.object({
  cep: zod.string(),
  rua: zod.string(),
  numero: zod.string(),
  complemento: zod.string().optional(),
  bairro: zod.string(),
  cidade: zod.string(),
  uf: zod.string(),
  type: zod.enum(['credito', 'debito', 'dinheiro']),
})

export type NewDeliveryFormData = zod.infer<typeof newDeliveryValidationSchema>

export function Cart() {
  const newDeliveryForm = useForm<NewDeliveryFormData>({
    resolver: zodResolver(newDeliveryValidationSchema),
    defaultValues: {
      type: 'credito',
    },
  })

  const { finalizaForm, zeraCart } = useContext(CartContext)
  const nav = useNavigate()
  const { handleSubmit, reset } = newDeliveryForm

  function handleCreateNewDelivery(data: NewDeliveryFormData) {
    finalizaForm(data)

    zeraCart()
    reset()
    nav('/finished')
  }

  return (
    <form onSubmit={handleSubmit(handleCreateNewDelivery)} action="">
      <Wrapper>
        <FormProvider {...newDeliveryForm}>
          <FormDelivery />
          <CartDelivery />
        </FormProvider>
      </Wrapper>
    </form>
  )
}
