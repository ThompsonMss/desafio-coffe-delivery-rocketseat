import React from 'react'
import { ShoppingCart } from 'phosphor-react'
import { Badge, ButtonContainer } from './styles'
import { Context } from '@/context/Main'

export function ButtonCart() {

  const { cart } = React.useContext(Context)
  const totalAmountInCart = cart.reduce((acc, current) => acc + current.theAmount, 0)

  return (
    <ButtonContainer>
      <ShoppingCart size={22} weight="fill" />
      {totalAmountInCart > 0 && <Badge><span>{totalAmountInCart}</span></Badge>}
    </ButtonContainer>
  )
}