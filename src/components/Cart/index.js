import Header from '../Header'
import CartListView from '../CartListView'

import './index.css'

const Cart = () => (
  <>
    <Header />
    <div className="cart-container">
      <div className="cart-content-container">
        <h1 className="cart-heading">My Cart</h1>
        <CartListView />
      </div>
    </div>
  </>
)

export default Cart
