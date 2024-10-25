import { useState, useEffect, useContext } from 'react';
import { shopContext } from '../Context/ShopContext';
import { Link } from 'react-router-dom';


function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const {products}=useContext(shopContext)
  const images = [
    "https://media.istockphoto.com/id/1206481532/photo/close-up-view-of-woman-reading-a-book-in-outdoor-at-park.webp?a=1&b=1&s=612x612&w=0&k=20&c=pLQDf0fRE4csVCqcH8pUVn1EtaBAYAliOFIIRlFV4RE=",
    "https://img.freepik.com/premium-photo/library-with-book-shelf-sign-that-says-word-it_1023064-37994.jpg?w=740",
    "https://media.istockphoto.com/id/1218656325/photo/laptop-with-online-library-realistic-3d-rendering.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZwTbE90EDfj64GhZRRsqipTaa-kHlXbpDZKQ6fozpQA=",
    "https://media.istockphoto.com/id/949118068/photo/books.webp?a=1&b=1&s=612x612&w=0&k=20&c=lxb-mHWs3AkeKR-J7ZwD8a5Mo9vmsq3uYPMaJbIUoCI=",
    "https://images.unsplash.com/photo-1608659597669-b45511779f93?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9va3N8ZW58MHx8MHx8fDA%3D"
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 3000); 
    return () => clearInterval(interval); 
  }, []);

  return (
    <div>
      <div className="flex items-center justify-center bg-gradient-to-r from-orange-300 to-purple-300">
        <div className="relative w-3/5 h-96 bg-white rounded-lg shadow-lg overflow-hidden mt-16 mb-16">
          <img 
            src={images[currentImageIndex]} 
            alt={`Product Image ${currentImageIndex + 1}`} 
            className="w-full h-full object-cover" 
          />
          <button 
            onClick={prevImage} 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg">
            &lt;
          </button>
          <button 
            onClick={nextImage} 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg">
            &gt;
          </button>
        </div>
      </div>
      <div className="flex justify-center mt-10 mb-8">
        <p className="text-3xl font-bold text-center text-gray-800">CATEGORIES</p>
      </div>
      {/* <div className='flex justify-center mt-10 mb-8'>
      <p className='font-bold text-3xl text-gray-800 border-b-2 border-gray-300 pb-2'>CATEGORIES</p>
       </div> */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 w-3/5 mx-auto mt-8 mb-8 ">
      <Link to='/category/Fiction'  className="no-underline">
         <div className="bg-gradient-to-r from-yellow-700 to-amber-700 rounded-lg   shadow-md p-4  flex items-center justify-center text-sky-50 transition-transform duration-200 transform hover:scale-105"
          ><p className="text-lg font-bold">Fiction</p>
          </div></Link>
          <Link to='/category/Self-help'  className="no-underline">
          <div className="bg-gradient-to-r from-yellow-700 to-amber-700 rounded-lg shadow-md p-4 flex items-center justify-center text-sky-50 transition-transform duration-200 transform hover:scale-105"
          ><p className="text-lg font-bold">Self Help</p>
          </div></Link>
          <Link to='/category/Thriller'  className="no-underline">
          <div className="bg-gradient-to-r from-yellow-700 to-amber-700 rounded-lg shadow-md p-4 flex items-center justify-center text-sky-50 transition-transform duration-200 transform hover:scale-105"
          ><p className="text-lg font-bold">Thriller</p>
          </div></Link>
          <Link to='/category/Romance'  className="no-underline">
          <div className="bg-gradient-to-r from-yellow-700 to-amber-700 rounded-lg shadow-md p-4 flex items-center justify-center text-sky-50 transition-transform duration-200 transform hover:scale-105"
          ><p className="text-lg font-bold">Romance</p>
          </div></Link>
          <Link to='/category/History'  className="no-underline">
          <div className="bg-gradient-to-r from-yellow-700 to-amber-700 rounded-lg shadow-md p-4 flex items-center justify-center text-sky-50 transition-transform duration-200 transform hover:scale-105"
          ><p className="text-lg font-bold">History</p>
          </div></Link>
          <Link to='/category/Biography'  className="no-underline">
          <div className="bg-gradient-to-r from-yellow-700 to-amber-700 rounded-lg shadow-md p-4 flex items-center justify-center text-sky-50 transition-transform duration-200 transform hover:scale-105"
          ><p className="text-lg font-bold">Biography</p>
          </div></Link>
          <Link to='/category/Memoir'  className="no-underline">
          <div className="bg-gradient-to-r from-yellow-700 to-amber-700 rounded-lg shadow-md p-4 flex items-center justify-center text-sky-50 transition-transform duration-200 transform hover:scale-105"
          ><p className="text-lg font-bold">Memoir</p>
          </div></Link>

      </div>
      <div className="relative flex items-center font-sans mt-8 mb-8 px-5 py-4 ">
  <p className="text-2xl font-semibold text-gray-800 relative z-10 bg-white px-4">BEST SELLERS</p>
  <div className="absolute inset-0 flex items-center mb-2">
    <div className="w-full border-t border-gray-400"></div>
  </div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 px-6">
  {products
  .filter((product)=>product.bestsellers===true)
  .map((product) => (
    <Link to={`/product/${product.id}`} key={product.id} className="no-underline">
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
<span className="ml-0 w-9 bg-green-500 text-white text-xs font-semibold rounded-full px-2 py-1">
    {product.rating ? product.rating.toFixed(1) : 'N/A'}
  </span>
  {/* Review count in parentheses */}
  <span className="ml-2">({product.review})</span>

      </div>
    </div>
    </Link>
  ))}
</div>
<div className="relative flex items-center font-sans mt-8 mb-8 px-5 py-4 ">
  <p className="text-2xl font-semibold text-gray-800 relative z-10 bg-white px-4">NEW ARRIVALS</p>
  <div className="absolute inset-0 flex items-center mb-2">
    <div className="w-full border-t border-gray-400"></div>
  </div>
</div>
<div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 px-6">
{products
  .filter((product)=>product.arrival=="new")
  .map((product) => (
    <Link to={`/product/${product.id}`} key={product.id} className="no-underline" >
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
</div>


    </div>
  );
}

export default Home;

