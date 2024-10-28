import {  useContext } from 'react';
import { shopContext } from '../Context/ShopContext';
import { Link } from 'react-router-dom';

function Collection() {

    const {products}=useContext(shopContext)
  return (
    <div className='p-2 mt-5 mb-8'>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 px-6">
{products
  
  .map((product) => (
    <Link to={`/product/${product.id}`} key={product.id} className="no-underline">
    <div key={product.id} className="bg-white rounded-lg shadow-md  overflow-hidden h-96 w-48 transition-transform duration-300 hover:scale-105">
      <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-3">
        <p className="font-semibold text-lg text-gray-800">{product.name}</p>
        <p className="text-sm text-gray-600">${product.price}</p>
        <p className="text-sm text-gray-600 flex items-center">
  Rating: 
  {Array.from({ length: 5 }, (_, index) => {
    
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

    </div>
  )
}

export default Collection