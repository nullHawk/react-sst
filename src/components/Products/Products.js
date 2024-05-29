import ProductCard from "../ProductCard/ProductCard";
import logo from './logo.png';
function Products() {
  const products = [
    {
    id: 1,
    title: "Apple iPhone 14",
    price: "Rs. 1,00,000"
    },
    {
    id: 2,
    title: "Apple iPhone 13",
    price: "Rs. 70,000"
    },
    {
    id: 3,
    title: "Google Pixel 7",
    price: "Rs. 50,000"
    },
    {
    id: 4,
    title: "Nokia 1100",
    price: "Rs. 2,000"
    },
    {
    id: 5,
    title: "Samsung Galaxy S10",
    price: "Rs. 1,00,000"
    },
    {
    id: 6,
    title: "Sony Xperia S10",
    price: "Rs. 1,00,000"
    }
    ];
  return (
    <div>
        I am Products
        <img src={logo} alt="logo" />
      {products.map((product) => (
        <ProductCard title={product.title} price={product.price} />
      ))}
    </div>
  );
}

export let a = 10;
export let b = 20;
export default Products;

//named export = multipe in one file
// default export - one in as file