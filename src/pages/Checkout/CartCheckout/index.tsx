import React from 'react'
import { ButtonDefault } from '@/components/Button/ButtonDefault'
import { ButtonWithIcon } from '@/components/Button/ButtonWithIcon'
import { SelectMinusAndPlus } from '@/components/Select/SelectMinusAndPlus'

import { ActionsCardCoffe, CardCoffe, Cart, ContainerCart, ContainerValues, Empty, PriceCardCoffe } from './styles'
import { Context } from '@/context/Main'
import { dataCoffes, ICoffe } from '@/pages/Home/components/CoffeList/dataCoffeList'
import { Trash } from 'phosphor-react'

interface CoffeInCart extends ICoffe {
  amount: number;
}

export function CartCheckout({ onFinishOrder }: { onFinishOrder: () => void }) {

  const { cart, removeCoffeCart, alterAmountInCart } = React.useContext(Context)

  const priceDelivery = 3.00
  let amountItens = 0.00

  const coffeInCart: CoffeInCart[] = []

  dataCoffes.filter(itemDataCoffe => {
    const coffeExists = cart.find(itemCart => itemCart.idCoffe === itemDataCoffe.id)

    if (coffeExists) {
      coffeInCart.push({ ...itemDataCoffe, amount: coffeExists.theAmount })
      amountItens += itemDataCoffe.value * coffeExists.theAmount
    }
  })

  const amountItensWithDelivery = amountItens + priceDelivery

  return (
    <ContainerCart>
      <h3>Cafés selecionados</h3>

      <Cart>

        {coffeInCart.length === 0 && (
          <Empty>Nenhum café selecionado</Empty>
        )}

        {coffeInCart.map(itemCoffe => (
          <CardCoffe key={itemCoffe.id}>
            <img src={itemCoffe.image} />
            <ActionsCardCoffe>
              <p>{itemCoffe.name}</p>
              <div>
                <SelectMinusAndPlus
                  small={true}
                  amount={itemCoffe.amount}
                  onMinus={(newValue: number) => alterAmountInCart(itemCoffe.id, newValue)}
                  onPlus={(newValue: number) => alterAmountInCart(itemCoffe.id, newValue)}
                />
                <ButtonWithIcon small={true} icon={Trash} labelButton="Remover" onClick={() => removeCoffeCart(itemCoffe.id)} />
              </div>
            </ActionsCardCoffe>

            <PriceCardCoffe><span>R$ {itemCoffe.value.toLocaleString('pt-br', { minimumFractionDigits: 2 })}</span></PriceCardCoffe>
          </CardCoffe>
        ))}

        {coffeInCart.length !== 0 && (
          <>
            <ContainerValues>
              <div>
                <span>Total de itens</span>
                <span>R$ {amountItens.toLocaleString('pt-br', { minimumFractionDigits: 2 })}</span>
              </div>
              <div>
                <span>Entrega</span>
                <span>R$ {priceDelivery.toLocaleString('pt-br', { minimumFractionDigits: 2 })}</span>
              </div>
              <div>
                <p>Total</p>
                <p>R$ {amountItensWithDelivery.toLocaleString('pt-br', { minimumFractionDigits: 2 })}</p>
              </div>
            </ContainerValues>

            <ButtonDefault onClick={onFinishOrder} labelButton='Confirmar Pedido' />
          </>
        )}

      </Cart>
    </ContainerCart>
  )
}