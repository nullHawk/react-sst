import ProductCard from "../ProductCard/ProductCard";
import Effect from "../Effect/Effect";
import { useState, useEffect } from "react";
import React from "react";
import logo from './logo.png';
function Products() {
  let [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://602fc537a1e9d20017af105e.mockapi.io/api/v1/products").then(
      (response) => {
        return response.json();
      }
    ).then((res) => {
      console.log(res);
      setProducts(res);
    })
  }, [])
  // const products = [
  //   {
  //   id: 1,
  //   title: "Apple iPhone 14",
  //   price: "Rs. 1,00,000"
  //   },
  //   {
  //   id: 2,
  //   title: "Apple iPhone 13",
  //   price: "Rs. 70,000"
  //   },
  //   {
  //   id: 3,
  //   title: "Google Pixel 7",
  //   price: "Rs. 50,000"
  //   },
  //   {
  //   id: 4,
  //   title: "Nokia 1100",
  //   price: "Rs. 2,000"
  //   },
  //   {
  //   id: 5,
  //   title: "Samsung Galaxy S10",
  //   price: "Rs. 1,00,000"
  //   },
  //   {
  //   id: 6,
  //   title: "Sony Xperia S10",
  //   price: "Rs. 1,00,000"
  //   }
  //   ];
    
  return (
    <div>
        <div><Effect /></div>
          {
              products.map(function (item, index) {
                return (<ProductCard key={index}  product={item}/>)
              })
          }
      </div>
  );
}

export let a = 10;
export let b = 20;
export default React.memo(Products);

//named export = multipe in one file
// default export - one in as file