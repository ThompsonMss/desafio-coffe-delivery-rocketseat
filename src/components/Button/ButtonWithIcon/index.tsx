import React from 'react'
import { ContainerButton } from './styles'

import { CreditCard as BaseIcon } from 'phosphor-react'

type IconPhosphor = typeof BaseIcon;

interface SelectButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  icon: IconPhosphor;
  labelButton: string;
  small?: boolean;
}

export function ButtonWithIcon({ icon: Icon, labelButton, ...props }: SelectButtonProps) {
  return (
    <ContainerButton {...props}>
      <Icon weight="thin" />
      <span>{labelButton}</span>
    </ContainerButton>
  )
}