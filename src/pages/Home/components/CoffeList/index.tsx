import React from 'react'
import { ICoffe } from './dataCoffeList'
import { Container, ContainerTypeOfCoffe, TypeOfCoffe } from './styles'

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
    </Container>
  )
}