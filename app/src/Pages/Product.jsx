import React, { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { shopContext } from '../Context/ShopContext';
import { Link } from 'react-router-dom';
import { addToCart } from '../Slice/CartSlice';
import { useDispatch } from 'react-redux';

function Product() {
   const { id } = useParams();
   const { products } = useContext(shopContext);
   const product = products.find((item) => item.id === id);
   const dispatch = useDispatch();
   const navigate=useNavigate()

   const handleAddToCart = () => {
      dispatch(addToCart(product));
      navigate('/cart'); // Navigate to Cart page after adding
   };
   
   useEffect(() => {
    window.scrollTo(0, 0);
 }, [id]); 
   return (
    <>
      <div className="flex flex-col items-center justify-center mx-auto mt-8 p-6 w-full md:w-3/4 bg-white shadow-lg rounded-lg">
      
         <div className="flex flex-col md:flex-row items-start w-full">
        
            <div className='flex-shrink-0'>
               <img 
                  src={product.imageUrl} 
                  alt={product.name} 
                  className="w-64 h-64 object-cover rounded-md shadow-md" 
               />
            </div>

            <div className="md:ml-8 mt-4 md:mt-0 text-left flex-grow">
               <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
               <p className="text-xl font-semibold text-amber-600 mb-2">${product.price}</p>

               <div className="flex items-center mb-2">
                  <span className="font-medium text-gray-600 mr-2">Rating:</span>
                  {Array.from({ length: 5 }, (_, index) => (
                     product.rating >= index + 1 ? 
                     <i key={index} className="fas fa-star text-yellow-500 ml-1" /> :
                     product.rating >= index + 0.5 ? 
                     <i key={index} className="fas fa-star-half-alt text-yellow-500 ml-1" /> :
                     <i key={index} className="far fa-star text-yellow-500 ml-1" />
                  ))}
               </div>

               <p className="text-gray-600 mb-4">Reviews: {product.review}</p>

               <div className="mt-4 flex space-x-4">
                 <Link to='/cart'> <button onClick={handleAddToCart} className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out">
                     Add to Cart
                  </button></Link>
                  <button className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out">
                     Add to Wishlist
                  </button>
               </div>
            </div>
         </div>

         <div className="w-full mt-4 text-left">
            <div className="border-t pt-2">
               <p className="text-gray-700">
                  <span className="font-semibold">Author:</span> 
                  <span className='italic text-gray-700'>{product.author}</span>
               </p>
               <p className="text-gray-700 leading-relaxed ">{product.description}</p>
               <p className="text-sm text-gray-500 ">Published on: {product.publicationDate}</p>
            </div>
         </div>
        
      </div>
      <div className="relative flex items-center font-sans mt-8 mb-8 px-5 py-4 ">
  <p className="text-2xl font-semibold text-gray-800 relative z-10 bg-white px-4">RELATED PRODUCTS</p>
  <div className="absolute inset-0 flex items-center mb-2">
    <div className="w-full border-t border-gray-400"></div>
  </div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 px-6 ">
{ products. filter((item) => item.category === product.category  && item.id !== product.id )
  .map((product) => (
    <Link to={`/product/${product.id}`} key={product.id} className='no-underline'>
    <div key={product.id} className="bg-white mb-8 rounded-lg shadow-md  overflow-hidden w-48 transition-transform duration-300 hover:scale-105">
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
   );
}

export default Product;
