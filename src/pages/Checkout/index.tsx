import React from 'react'
import { Input } from '@/components/Input'
import { SelectButton } from '@/components/Select/SelectButton'
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from 'phosphor-react'
import {
  Cart,
  CompleteOrder,
  Container,
  ContainerAddress,
  ContainerCart,
  ContainerForm,
  ContainerTypeOfPayment,
  ItensTypeOfPayment,
  LabelCompleteOrder,
  Row
} from './styles'

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
            <Row>
              <Input placeholder='CEP' width="12.5" />
            </Row>
            <Row>
              <Input placeholder='Rua' />
            </Row>
            <Row>
              <Input placeholder='Número' width="12.5" />
              <Input placeholder='Complemento' optional="true" />
            </Row>
            <Row>
              <Input placeholder='Bairro' width="12.5" />
              <Input placeholder='Cidade' />
              <Input placeholder='UF' width='3.75' />
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
            />
            <SelectButton
              icon={Bank}
              labelButton="Cartão de débito"
            />
            <SelectButton
              icon={Money}
              labelButton="Dinheiro"
            />
          </ItensTypeOfPayment>

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