import React from 'react'
import { ContainerInput } from './styles'

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  optional?: string;
  width?: string;
}

export function Input(props: InputProps) {
  return (
    <ContainerInput width={props.width ?? 'none'} optional={props.optional}>
      <input {...props} />
      {props.optional && <span>Opcional</span>}
    </ContainerInput>
  )
}