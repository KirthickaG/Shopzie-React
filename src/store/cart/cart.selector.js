import { createSelector } from 'reselect'

const selectcartReducer = state => state.cart

export const selectCartItems = createSelector([selectcartReducer],(cart) => cart.cartItems)

export const selectIsCartOpen = createSelector([selectcartReducer],(cart) => cart.isCartOpen)

export const selectCartCount = createSelector([selectCartItems],(cartItems) => cartItems.reduce((total,item) => total+item.quantity ,0))

export const selectCartPrice = createSelector([selectCartItems],(cartItems) => cartItems.reduce((total,item) => total+(item.price * item.quantity), 0) )