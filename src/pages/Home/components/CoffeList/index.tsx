import React from 'react'
import { Container, ContainerAction, ContainerTypeOfCoffe, Price, TypeOfCoffe } from './styles'

import { ButtonOnlyIcon } from '@/components/Button/ButtonOnlyIcon'
import { SelectMinusAndPlus } from '@/components/Select/SelectMinusAndPlus'
import { ShoppingCartSimple } from 'phosphor-react'

import { ICoffe } from './dataCoffeList'

interface CoffeListComponentProps {
  coffe: ICoffe
}

export function CoffeListComponent({ coffe }: CoffeListComponentProps) {
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
        <Price>{coffe.value.toLocaleString('pt-br', {minimumFractionDigits: 2})}</Price>

        <ContainerAction>
          <SelectMinusAndPlus />
          <ButtonOnlyIcon
            icon={ShoppingCartSimple}
            onClick={() => alert('asd')}
          />
        </ContainerAction>
      </footer>
    </Container>
  )
}