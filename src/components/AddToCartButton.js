import React, {useContext} from 'react'
import {ShopContext} from '../context'
import styled from 'styled-components'

const Button = styled.button`
  background-color: #1F5240;
  border: none;
  border-radius: 24px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-align: center;
  padding: 12px 24px;
  color: white;
  cursor: pointer;
`

function AddToCartButton({ product, quantity = 1 }) {
  const { addLineItem } = useContext(ShopContext)
  return (
    <Button onClick={() => 
      addLineItem(product.variant.id, quantity)
      //console.log('Add product to cart here!')
    }>Add to cart</Button>
  )
}

export default AddToCartButton
