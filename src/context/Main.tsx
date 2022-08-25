import React from 'react'
import { addItemInCart, alterAmountItemInCart, clearCart, mainReducer, newOrder, removeItemInCart } from '@/reducers/main/reducer'

interface IMainContext {
  cart: Array<{ idCoffe: number; theAmount: number; }>
  order: { address: string; typeOfPayment: string; } | null;
  addCoffeCart: (data: { id: number, amout: number }) => void;
  removeCoffeCart: (id: number) => void;
  alterAmountInCart: (idCoffe: number, newValue: number) => void;
  newOrderOfCoffe: (address: string, payment: string) => void;
  clearCartItens: () => void;
}

export const Context = React.createContext({} as IMainContext)

export function MainContext({ children }: { children: React.ReactNode }) {

  const [mainState, dispatch] = React.useReducer(mainReducer, {
    cart: [],
    order: null
  })

  const { cart, order } = mainState

  function addCoffeCart(data: { id: number, amout: number }) {
    dispatch(addItemInCart(data))
  }

  function removeCoffeCart(id: number) {
    dispatch(removeItemInCart(id))
  }

  function alterAmountInCart(idCoffe: number, newValue: number) {
    dispatch(alterAmountItemInCart(idCoffe, newValue))
  }

  function clearCartItens() {
    dispatch(clearCart())
  }

  function newOrderOfCoffe(address: string, payment: string) {
    dispatch(newOrder(address, payment))
  }

  return (
    <Context.Provider value={{ cart, order, addCoffeCart, removeCoffeCart, alterAmountInCart, clearCartItens, newOrderOfCoffe }}>
      {children}
    </Context.Provider>
  )

}