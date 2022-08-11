import { Minus, Plus } from 'phosphor-react'
import React from 'react'
import { ButtonMinus, ButtonPlus, Container } from './styles'

export function SelectMinusAndPlus() {
  return (
    <Container>
      <ButtonMinus>
        <Minus size={14} weight="fill" />
      </ButtonMinus>


      <span>1</span>

      <ButtonPlus>
        <Plus size={14} weight="fill" />
      </ButtonPlus>
    </Container>
  )
}