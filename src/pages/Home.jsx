import React ,{ useEffect, useState } from 'react'
import Product from '../components/Product';
import { nanoid } from 'nanoid';


const Home = () => {

  const [products,setProducts] = useState([]);

  // number of the fetched products
  const productsNumber= 20;

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products?limit=${productsNumber}`)
    .then(response => response.json())
    .then(result => result.map(product => {
      return {
        id: nanoid(),
        name: product.title,
        price: product.price,
        image: product.image,
        description: product.description
      }
    })).then(data => setProducts(data))
  }, []) // fetch the data once
  

  const allProducts = products.map((product) => {
    return(
      <Product 
        key={product.id} 
        product={product}
      />
    )
  });
  
  return (
    <main className='main-section'>
        <section className='products'>
          <div className="container">
            <div className="products-box">
                {allProducts}
            </div>
          </div>
        </section>
    </main>
  )
}

export default Home