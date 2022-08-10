import React from 'react'
import { Banner, IntroContainer, WrapperInto } from './styles'

export function Home() {
  return (
    <IntroContainer>
      <Banner />
      <WrapperInto>
        <h1>Home</h1>
      </WrapperInto>
    </IntroContainer>
  )
}