import React from 'react'
import { Cart, CompleteOrder, Container, ContainerAddress, ContainerCart, ContainerTypeOfPayment } from './styles'

export function Checkout() {
  return (
    <Container>
      <CompleteOrder>
        <h3>Complete seu pedido</h3>

        <ContainerAddress>
          asd
        </ContainerAddress>

        <ContainerTypeOfPayment></ContainerTypeOfPayment>

      </CompleteOrder>

      <ContainerCart>
        <h3>Cafés selecionados</h3>

      <Cart></Cart>
      </ContainerCart>
    </Container>
  )
}