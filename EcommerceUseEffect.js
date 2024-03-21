import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import './EcommerceUseEffect.css'

export default function EcommerceUseEffect() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);
  async function getProducts() {
    let res = await fetch('https://fakestoreapi.com/products');
    let productList = await res.json();
    setProduct(productList);
    console.log(res);
  }

  if (product.length === 0) {
    return <h1>Fetching Data</h1>;
  }
  return (
    <>
      <div className="productList">
        {product.map((prod) => (
          <ProductCard {...prod} key={prod.id} />
        ))}
      </div>
    </>
  );
}
