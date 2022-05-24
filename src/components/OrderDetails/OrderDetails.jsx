import React, { useContext } from 'react'
import { AppContext } from '../../store/AppContext'
import OrderCart from '../OrderCart/OrderCart'
import Product from '../Product/Product'

export default function OrderDetails() {
  let { data } = useContext(AppContext)

  return (
    <div className='container d-flex'>
      <OrderCart />
        {data.cartItems.map((product) => (
          <Product productInfo={product} key={product.id} />
        ))}
    </div>
  )
}
