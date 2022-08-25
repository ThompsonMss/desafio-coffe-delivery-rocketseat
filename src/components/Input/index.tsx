import React from 'react'
import { ContainerInput } from './styles'

interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  optional?: string;
  width?: string;
}

function ComponentInput(props: InputProps, ref: React.Ref<any>) {
  return (
    <ContainerInput width={props.width ?? 'none'} optional={props.optional}>
      <input ref={ref} {...props} />
      {props.optional && <span>Opcional</span>}
    </ContainerInput>
  )
}

export const Input = React.forwardRef(ComponentInput)