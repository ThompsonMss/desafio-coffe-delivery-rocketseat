import React from 'react'
import {
  Container, ContainerInfo, Icon, Wrapper, Info, Illustration
} from './styles'

import IllustrationImg from '@/assets/images/Illustration.svg'

import { CurrencyDollar, MapPin, Timer, Trash } from 'phosphor-react'

import { Context } from '@/context/Main'

export function Success() {

  const { order } = React.useContext(Context)

  const addressSplit = order?.address.split('#--#')

  const addressLine1 = addressSplit ? addressSplit[0] : ''
  const addressLine2 = addressSplit ? addressSplit[1] : ''

  return (
    <Container>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <Wrapper>
        <ContainerInfo>
          <Info>
            <Icon color='--purple'><MapPin weight="fill" size={16} /></Icon>
            <div>
              <p>Entrega em <strong>{addressLine1}</strong></p>
              <p>{addressLine2}</p>
            </div>
          </Info>
          <Info>
            <Icon color='--yellow'><Timer weight="fill" size={16} /></Icon>
            <div>
              <p>Previsão de entrega</p>
              <p><strong>20 min - 30 min </strong></p>
            </div>
          </Info>
          <Info>
            <Icon color='--yellow-dark'><CurrencyDollar weight="fill" size={16} /></Icon>
            <div>
              <p>Pagamento na entrega</p>
              <p><strong>{order?.typeOfPayment}</strong></p>
            </div>
          </Info>
        </ContainerInfo>

        <Illustration>
          <img src={IllustrationImg} />
        </Illustration>
      </Wrapper>

    </Container>
  )
}