import React from 'react'
import { Link, useParams } from 'react-router-dom'
import {  useContext } from 'react';
import { shopContext } from '../Context/ShopContext';

function Catogary() {
    const { category}=useParams()
    const {products}=useContext(shopContext)
    const filteredProducts = products.filter(product => product.category === category);
  return (
    <>
    <div className='flex items-center justify-center my-4'>
      <p className='font-bold text-3xl text-gray-800 border-b-2 border-gray-300 pb-2'>{category.toUpperCase()} </p>
       </div>
     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 px-6 ">
{filteredProducts
  .map((product) => (
    <Link to={`/product/${product.id}`} key={product.id}>
    <div key={product.id} className="bg-white rounded-lg shadow-md  overflow-hidden w-48 transition-transform duration-300 hover:scale-105">
      <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-3">
        <p className="font-semibold text-lg text-gray-800">{product.name}</p>
        <p className="text-sm text-gray-600">${product.price}</p>
        <p className="text-sm text-gray-600 flex items-center">
  Rating: 
  {Array.from({ length: 5 }, (_, index) => {
    // Determine if the star should be filled, half-filled, or empty
    if (product.rating >= index + 1) {
      return (
        <i key={index} className="fas fa-star text-yellow-500 ml-1" />
      );
    } else if (product.rating >= index + 0.5) {
      return (
        <i key={index} className="fas fa-star-half-alt text-yellow-500 ml-1" />
      );
    } else {
      return (
        <i key={index} className="far fa-star text-yellow-500 ml-1" />
      );
    }
  })}
 
</p>


      </div>
    </div>
    </Link>
  ))}
  </div>
    </>
  )
}

export default Catogary