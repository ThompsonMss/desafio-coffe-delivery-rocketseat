import React from 'react'
import { ShoppingCart } from 'phosphor-react'
import { Badge, ButtonContainer } from './styles'

export function ButtonCart() {
  return (
    <ButtonContainer>
      <ShoppingCart size={22} weight="fill" />
      <Badge><span>3</span></Badge>
    </ButtonContainer>
  )
}