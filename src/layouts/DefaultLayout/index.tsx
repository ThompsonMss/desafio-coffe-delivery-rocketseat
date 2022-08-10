import React from 'react'
import { Outlet } from 'react-router-dom'
import { Actions, ButtonLocaltion, ContainerLayout, HeaderContainer, Wrapper } from './styles'

import logotipo from '../../assets/images/logotipo.svg'
import { MapPin } from 'phosphor-react'
import { ButtonCart } from './components/ButtonCart'

export function DefaultLayout() {
  return (
    <>
      <HeaderContainer>
        <nav>
          <img src={logotipo} alt="Logotipo Coffe Delivery" />

          <Actions>
            <ButtonLocaltion>
              <MapPin size={22} weight="fill" />
              Brasília, DF
            </ButtonLocaltion>

            <ButtonCart />
          </Actions>
        </nav>
      </HeaderContainer>

      <ContainerLayout>
        <Wrapper>
          <Outlet />
        </Wrapper>
      </ContainerLayout>
    </>
  )
}