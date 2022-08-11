import React from 'react'
import { ButtonMinus, ButtonPlus, Container } from './styles'

import { Minus, Plus } from 'phosphor-react'

interface SelectMinusAndPlusProps {
  amount: number;
  setAmount: React.Dispatch<React.SetStateAction<number>>
}

export function SelectMinusAndPlus({ amount = 1, setAmount = () => null }: SelectMinusAndPlusProps) {

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
    <Container>
      <ButtonMinus onClick={handleMinus}>
        <Minus size={14} weight="fill" />
      </ButtonMinus>

      <span>{amount}</span>

      <ButtonPlus onClick={handlePlus}>
        <Plus size={14} weight="fill" />
      </ButtonPlus>
    </Container>
  )
}