import { Input } from '@/components/Input'
import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import React from 'react'
import { Cart, CompleteOrder, Container, ContainerAddress, ContainerCart, ContainerForm, ContainerTypeOfPayment, LabelCompleteOrder, Row } from './styles'

export function Checkout() {
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
            <Input />
            <Input />
            <Row>
              <Input />
              <Input />
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

        </ContainerTypeOfPayment>

      </CompleteOrder>

      <ContainerCart>
        <h3>Cafés selecionados</h3>

        <Cart>
        </Cart>
      </ContainerCart>
    </Container>
  )
}