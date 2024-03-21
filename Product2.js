import React,{useState} from 'react'

export default function Product2() {

    let [productName, updateName] = useState('Samsung s22')
    let [productPrice, updatePrice] = useState('130000')


  return (
    <div>
        <h1>Product : {productName}</h1>
        <h3>Price : {productPrice}</h3>

        <input id='pName' />
        <button onClick={()=> {
          let pName = document.getElementById('pName').value
          //productName = pName
          updateName(pName)
        }}>UpdateProduct</button>

        <input id='pPrice' />
         <button onClick={()=> {
          let pPrice = document.getElementById('pPrice').value
          updatePrice(pPrice)
        }}>UpdatePrice</button>
    </div>
  )
}
