import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Actions, ButtonLocaltion, ContainerLayout, HeaderContainer } from './styles'

import logotipo from '../../assets/images/logotipo.svg'
import { MapPin } from 'phosphor-react'
import { ButtonCart } from './components/ButtonCart'

export function DefaultLayout() {
  return (
    <>
      <HeaderContainer>
        <nav>
          <Link to="/home">
            <img src={logotipo} alt="Logotipo Coffe Delivery" />
          </Link>

          <Actions>
            <ButtonLocaltion>
              <MapPin size={22} weight="fill" />
              Brasília, DF
            </ButtonLocaltion>

            <Link to="/checkout">
              <ButtonCart />
            </Link>
          </Actions>
        </nav>
      </HeaderContainer>

      <ContainerLayout>
        <Outlet />
      </ContainerLayout>
    </>
  )
}