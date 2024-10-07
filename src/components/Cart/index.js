import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'
import Header from '../Header'
import CartListView from '../CartListView'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllItems} = value
      const showEmptyView = cartList.length === 0
      let totalOrderAmount = 0
      totalOrderAmount = cartList
        .map(obj => obj.price * obj.quantity)
        .reduce((acc, current) => acc + current, 0)

      const onRemoveAllItem = () => {
        removeAllItems()
      }

      return (
        <>
          <Header />
          {showEmptyView ? (
            <EmptyCartView />
          ) : (
            <div className="cart-container">
              <div className="cart-content-container">
                <div className="cart-content-header">
                  <h1 className="cart-heading">My Cart</h1>
                  <button
                    type="button"
                    onClick={onRemoveAllItem}
                    className="remove-cart-item-btn"
                  >
                    Remove all
                  </button>
                </div>
                <CartListView />
                <div className="total-order-amount-card">
                  <h1 className="total-order-amount">
                    Order Total:{' '}
                    <span className="order-amount">
                      Rs {totalOrderAmount}/-
                    </span>
                  </h1>
                  <p className="total-order-items">
                    {cartList.length} Items in cart
                  </p>
                  <button type="button" className="checkout-btn">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )
    }}
  </CartContext.Consumer>
)

export default Cart
