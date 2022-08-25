import { produce } from 'immer'

/**
 * Types
 */

enum Types {
  ADD_ITEM_IN_CART = 'ADD_ITEM_IN_CART',
  REMOVE_ITEM_IN_CART = 'REMOVE_ITEM_IN_CART',
  ALTER_AMOUNT_ITEM_IN_CART = 'ALTER_AMOUNT_ITEM_IN_CART'
}

/**
 * Reducers
 */

interface MainState {
  cart: Array<{
    idCoffe: number;
    theAmount: number;
  }>
  order: {
    address: string;
    typeOfPayment: string;
  } | null;
}

export function mainReducer(state: MainState, action: { type: Types, payload?: any }) {

  switch (action.type) {
    case Types.ADD_ITEM_IN_CART:
      return produce(state, draft => {

        // Verificando se existe produto no carrinho.
        const existIten = draft.cart.findIndex(item => item.idCoffe === action.payload.id)

        if (existIten === -1) {
          draft.cart.push({
            idCoffe: action.payload.id,
            theAmount: action.payload.amout
          })
        } else {
          draft.cart[existIten].theAmount += action.payload.amout
        }

        return draft
      })

    case Types.REMOVE_ITEM_IN_CART:
      return produce(state, draft => {
        // Verificando se existe produto no carrinho.
        const existItemIndex = draft.cart.findIndex(item => item.idCoffe === action.payload.id)

        if (existItemIndex > -1) {
          draft.cart.splice(existItemIndex, 1)
        }

        return draft
      })

    case Types.ALTER_AMOUNT_ITEM_IN_CART:
      return produce(state, draft => {

        // Verificando se existe produto no carrinho.
        const existIten = draft.cart.findIndex(item => item.idCoffe === action.payload.idCoffe)

        if (existIten > -1) {
          draft.cart[existIten].theAmount = action.payload.newValue
        }

        return draft
      })

    default:
      return state
  }

}

/**
 * Actions
 */

export function addItemInCart(data: { id: number, amout: number }) {
  return {
    type: Types.ADD_ITEM_IN_CART,
    payload: data
  }
}

export function removeItemInCart(id: number) {
  return {
    type: Types.REMOVE_ITEM_IN_CART,
    payload: {
      id: id
    }
  }
}

export function alterAmountItemInCart(idCoffe: number, newValue: number) {
  return {
    type: Types.ALTER_AMOUNT_ITEM_IN_CART,
    payload: {
      idCoffe: idCoffe,
      newValue: newValue
    }
  }
}