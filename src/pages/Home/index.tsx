import React from 'react'
import { Banner, CoffeList, CoffeListContainer, ColumnItem, ContainerItems, Content, IntroContainer, Item, TitleSectionCoffeList, WrapperInto } from './styles'

import imageCoffe from '@/assets/images/coffe-intro.svg'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { dataCoffes } from './components/CoffeList/dataCoffeList'
import { CoffeListComponent } from './components/CoffeList'

export function Home() {
  return (
    <>
      <IntroContainer>
        <Banner />
        <WrapperInto>
          <Content>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

            <ContainerItems>
              <ColumnItem>
                <Item colorBadge='--yellow-dark'>
                  <div><ShoppingCart weight="fill" /></div>
                  <span>Compra simples e segura</span>
                </Item>
                <Item colorBadge='--yellow'>
                  <div><Timer weight="fill" /></div>
                  <span>Entrega rápida e rastreada</span>
                </Item>
              </ColumnItem>
              <ColumnItem>
                <Item colorBadge='--base-text'>
                  <div><Package weight="fill" /></div>
                  <span>Embalagem mantém o café intacto</span>
                </Item>
                <Item colorBadge='--purple'>
                  <div><Coffee weight="fill" /></div>
                  <span>O café chega fresquinho até você</span>
                </Item>
              </ColumnItem>
            </ContainerItems>
          </Content>

          <img src={imageCoffe} />
        </WrapperInto>
      </IntroContainer>

      <CoffeList>
        <TitleSectionCoffeList>Nossos cafés</TitleSectionCoffeList>

        <CoffeListContainer>
          {dataCoffes.map(coffe => (
            <CoffeListComponent key={coffe.id} coffe={coffe} />
          ))}
        </CoffeListContainer>

      </CoffeList>
    </>
  )
}