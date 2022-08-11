import React from 'react'
import { ButtonContainer } from './styles'

import { ShoppingCartSimple } from 'phosphor-react'

interface ButtonOnlyIconProps extends React.HTMLAttributes<HTMLButtonElement> {
  icon: typeof ShoppingCartSimple
}

export function ButtonOnlyIcon({ icon: Icon, ...props }: ButtonOnlyIconProps) {
  return (
    <ButtonContainer {...props}>
      {<Icon size={22} weight="fill" />}
    </ButtonContainer>
  )
}