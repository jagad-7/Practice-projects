import React from 'react'
import Products from './Products'

export default function ProdDestr() {
    let product1 = {
        id : 1,
        name : ' Lenovo think pad',
        aprice : 40000,
        dprice : 35000
    }
  return (
    <div>
         {/* normal way  */}
        {/* <Products id={product1.id} name={product1.name} aprice={product1.aprice} dprice={product1.dprice} /> */}

        {/* Spred operator */}
        <Products {...product1} />

    </div>
  )
}
