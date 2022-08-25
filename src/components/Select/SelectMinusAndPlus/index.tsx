import React from 'react'
import { ButtonMinus, ButtonPlus, Container } from './styles'

import { Minus, Plus } from 'phosphor-react'

interface SelectMinusAndPlusProps {
  amount: number;
  setAmount?: React.Dispatch<React.SetStateAction<number>>
  small?: boolean;
  onMinus?: (value: number) => void;
  onPlus?: (value: number) => void;
}

export function SelectMinusAndPlus({
  amount = 1,
  setAmount = () => null,
  small = false,
  onMinus = undefined,
  onPlus = undefined
}: SelectMinusAndPlusProps) {

  function handleMinus() {
    if (amount <= 1)
      return

    if (onMinus !== undefined) {
      onMinus(amount - 1)
    } else {
      setAmount(state => state - 1)
    }

  }

  function handlePlus() {
    if (amount >= 99)
      return

    if (onPlus !== undefined) {
      onPlus(amount + 1)
    } else {
      setAmount(state => state + 1)
    }
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