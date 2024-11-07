import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCartItems, removeFromCart, updateQuantity ,patchUpdateCart} from '../Slice/CartSlice';
import { Link } from 'react-router-dom';

function Cart() {
  const dispatch = useDispatch();
  const { cartItems, loading, error } = useSelector((state) => state.cart);



  const handleRemove = (itemId) => {
    dispatch(removeFromCart(itemId));
    // dispatch(patchUpdateCart({ userId: currentUser.id, updatedCart: cartItems }));
  };

  const handleUpdateQuantity = (itemId, action) => {
    dispatch(updateQuantity({ itemId, actionType: action }));
    // dispatch(patchUpdateCart({ userId: currentUser.id, updatedCart: cartItems }));
  };

  const cartItemCalculate = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (cartItems.length === 0) return <p>Your cart is empty!</p>;

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
  <h2 className="text-3xl font-semibold mb-6 text-gray-800">Cart</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {cartItems.map((product) => (
      <div
        key={product.id}
        className="flex flex-col justify-between bg-white shadow-md rounded-lg p-4 transition-transform transform hover:scale-105 duration-200"
      >
        <div className="w-full h-36 rounded-lg overflow-hidden bg-gray-200">
          <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
        </div>
        <div className="flex-grow pt-3">
          <p className="font-bold text-xl text-gray-800">{product.name}</p>
          <p className="text-lg font-semibold text-gray-600">${product.price}</p>
          {/* <p className="text-sm text-gray-500">{product.description}</p> */}
        </div>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center ">
            
            <button
              onClick={() => handleUpdateQuantity(product.id, 'decrement')}
              className="bg-gray-300 text-gray-700 px-2 py-1 rounded-full hover:bg-gray-400 transition duration-200"
            >
              -
            </button>
            <input
              type="text"
              className="w-12 text-center border border-gray-300 rounded-md text-lg"
              value={product.quantity}
              readOnly
            /><button
            onClick={() => handleUpdateQuantity(product.id, 'increment')}
            className="bg-gray-300 text-gray-700 px-2 py-1 rounded-full hover:bg-gray-400 transition duration-200"
          >
            +
          </button>
           
          </div>
          <button
            onClick={() => handleRemove(product.id)}
            className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition duration-200"
          >
            Remove
          </button>
        </div>
      </div>
    ))}
  </div>
  <div className="flex items-center justify-between bg-white shadow-md rounded-lg p-5 mt-6">
    <h1 className="font-bold text-2xl text-gray-800">Total: ${cartItemCalculate()}</h1>
    <Link to="/payment">
      <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition duration-200">
        Buy Now
      </button>
    </Link>
  </div>
</div>

  
  );
}

export default Cart;
