import React from 'react'
import { Input } from '@/components/Input'
import { SelectButton } from '@/components/Select/SelectButton'
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from 'phosphor-react'
import {
  CompleteOrder,
  Container,
  ContainerAddress,
  ContainerForm,
  ContainerTypeOfPayment,
  ItensTypeOfPayment,
  LabelCompleteOrder,
  Row
} from './styles'
import { Context } from '@/context/Main'
import { CartCheckout } from './CartCheckout'
import { useForm } from 'react-hook-form'

import { useNavigate } from 'react-router-dom'

import toast from 'react-hot-toast'

type Inputs = {
  cep: string;
  rua: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
};

enum TypesOfPayment {
  CREDIT = 'Cartão de crédito',
  DEBIT = 'Cartão de débito',
  MONEY = 'Dinheiro'
}

export function Checkout() {

  const navigate = useNavigate()

  const { cart, clearCartItens, newOrderOfCoffe } = React.useContext(Context)
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()

  const [typeOfPayment, setTypeOfPayment] = React.useState<TypesOfPayment | null>(null)

  function finishingOrder(data: Inputs) {

    if (typeOfPayment === null)
      return toast.error('Ops! Escolha uma forma de pagamento.')

    newOrderOfCoffe(
      `${data.rua}, ${data.numero} #--# ${data.bairro} - ${data.cidade}, ${data.uf.toUpperCase()}`,
      typeOfPayment
    )

    clearCartItens()
    navigate('/success')
  }

  return (
    <Container>
      <CompleteOrder>
        <h3>Complete seu pedido</h3>

        <ContainerAddress>

          <LabelCompleteOrder colorIcon='--yellow-dark'>
            <MapPinLine />

            <div>
              <p>Endereço de Entrega</p>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </LabelCompleteOrder>

          <ContainerForm>
            <Row>
              <Input placeholder='CEP' width="12.5" {...register('cep', { required: true })} />
            </Row>
            <Row>
              <Input placeholder='Rua' {...register('rua', { required: true })} />
            </Row>
            <Row>
              <Input placeholder='Número' width="12.5" {...register('numero', { required: true })} />
              <Input placeholder='Complemento' optional="true" {...register('complemento')} />
            </Row>
            <Row>
              <Input placeholder='Bairro' width="12.5" {...register('bairro', { required: true })} />
              <Input placeholder='Cidade' {...register('cidade', { required: true })} />
              <Input placeholder='UF' width='3.75' {...register('uf', { required: true, maxLength: 2 })} />
            </Row>
          </ContainerForm>

        </ContainerAddress>

        <ContainerTypeOfPayment>

          <LabelCompleteOrder colorIcon='--purple'>
            <CurrencyDollar />

            <div>
              <p>Pagamento</p>
              <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
            </div>
          </LabelCompleteOrder>

          <ItensTypeOfPayment>
            <SelectButton
              icon={CreditCard}
              labelButton="Cartão de crédito"
              activeButton={typeOfPayment === TypesOfPayment.CREDIT}
              onClick={() => setTypeOfPayment(TypesOfPayment.CREDIT)}
            />
            <SelectButton
              icon={Bank}
              labelButton="Cartão de débito"
              activeButton={typeOfPayment === TypesOfPayment.DEBIT}
              onClick={() => setTypeOfPayment(TypesOfPayment.DEBIT)}
            />
            <SelectButton
              icon={Money}
              labelButton="Dinheiro"
              activeButton={typeOfPayment === TypesOfPayment.MONEY}
              onClick={() => setTypeOfPayment(TypesOfPayment.MONEY)}
            />
          </ItensTypeOfPayment>

        </ContainerTypeOfPayment>

      </CompleteOrder>

      <CartCheckout onFinishOrder={handleSubmit(finishingOrder)} />
    </Container>
  )
}