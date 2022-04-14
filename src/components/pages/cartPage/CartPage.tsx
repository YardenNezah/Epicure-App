import React from 'react'
import Footer from '../../footer/Footer';
import Header from '../../header/Header';
import CartItem from './CartItem';
import './CartPage.scss';
import './CartPage.scss';

const CartPage = () => {
  return (
    <div>
        <Header />
        <h2>CART</h2>
        <table className='table-container'>
                <thead>
                    <tr className="table-header">
                        {/* <th>Picture</th>
                        <th>Restaurant</th>
                        <th>Dish</th>
                        <th>Side</th>
                        <th>Changes</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Actions</th> */}
                    </tr>
                </thead>
                <tbody>
                    {/* <CartItem dish={}/> */}
                </tbody>
            </table>
            <div className='cart-footer'>   <Footer /></div>
    
    </div>
  )
}

export default CartPage