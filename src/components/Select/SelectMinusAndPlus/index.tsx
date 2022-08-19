import React from 'react'
import { ButtonMinus, ButtonPlus, Container } from './styles'

import { Minus, Plus } from 'phosphor-react'

interface SelectMinusAndPlusProps {
  amount: number;
  setAmount: React.Dispatch<React.SetStateAction<number>>
  small?:boolean;
}

export function SelectMinusAndPlus({ amount = 1, setAmount = () => null, small = false }: SelectMinusAndPlusProps) {

  function handleMinus() {
    if (amount <= 1)
      return

    setAmount(state => state - 1)
  }

  function handlePlus() {
    if (amount >= 99)
      return

    setAmount(state => state + 1)
  }

  return (
    <Container small={small}>
      <ButtonMinus small={small} onClick={handleMinus}>
        <Minus size={14} weight="fill" />
      </ButtonMinus>

      <span>{amount}</span>

      <ButtonPlus small={small} onClick={handlePlus}>
        <Plus size={14} weight="fill" />
      </ButtonPlus>
    </Container>
  )
}