import React from 'react'
import { Container, ContainerAction, ContainerTypeOfCoffe, Price, TypeOfCoffe } from './styles'

import { ButtonOnlyIcon } from '@/components/Button/ButtonOnlyIcon'
import { SelectMinusAndPlus } from '@/components/Select/SelectMinusAndPlus'
import { ShoppingCartSimple } from 'phosphor-react'

import { ICoffe } from './dataCoffeList'
import { Context } from '@/context/Main'

interface CoffeListComponentProps {
  coffe: ICoffe
}

export function CoffeListComponent({ coffe }: CoffeListComponentProps) {

  const { addCoffeCart } = React.useContext(Context)
  const [amount, setAmount] = React.useState(1)

  function handleAddCoffeCart() {
    addCoffeCart({ id: coffe.id, amout: amount })
    setAmount(1)
  }

  return (
    <Container>
      <img src={coffe.image} alt={`Imagem de cáfe (${coffe.name})`} />

      <ContainerTypeOfCoffe>
        {coffe.typeOfCoffe.map(typeOfCoffe => (
          <TypeOfCoffe key={typeOfCoffe.id}><span>{typeOfCoffe.name}</span></TypeOfCoffe>
        ))}
      </ContainerTypeOfCoffe>

      <h1>{coffe.name}</h1>
      <p>{coffe.desc}</p>

      <footer>
        <Price>{coffe.value.toLocaleString('pt-br', { minimumFractionDigits: 2 })}</Price>

        <ContainerAction>
          <SelectMinusAndPlus amount={amount} setAmount={setAmount} />
          <ButtonOnlyIcon
            icon={ShoppingCartSimple}
            onClick={handleAddCoffeCart}
          />
        </ContainerAction>
      </footer>
    </Container>
  )
}