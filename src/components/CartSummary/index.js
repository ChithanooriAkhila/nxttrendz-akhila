import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const totalPrice = cartList.reduce((a, c) => a + c.price * c.quantity, 0)

      return (
        <>
          <div className="cart-summary-container">
            <h1>{`Order Total : Rs ${totalPrice} /-`}</h1>
            <p>{`${cartList.length} items in cart`}</p>
            <button type="button">Checkout</button>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
