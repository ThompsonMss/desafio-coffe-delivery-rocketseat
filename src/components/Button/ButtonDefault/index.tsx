import React from 'react'
import { ContainerButton } from './styles'

interface SelectButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  labelButton: string;
}

export function ButtonDefault({ labelButton, ...props }: SelectButtonProps) {
  return (
    <ContainerButton {...props}>
      <span>{labelButton}</span>
    </ContainerButton>
  )
}