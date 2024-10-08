import Header from '../Header'
import CartListView from '../CartListView'

import CartContext from '../../context/CartContext'
import CartSummary from '../CartSummary'
import EmptyCartView from '../EmptyCartView'

import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value
      const showEmptyView = cartList.length === 0
      const onRemoveAllItem = () => {
        removeAllCartItems()
      }

      return (
        <>
          <Header />
          <div className="cart-container">
            {showEmptyView ? (
              <EmptyCartView />
            ) : (
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
                <CartSummary />
              </div>
            )}
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default Cart
