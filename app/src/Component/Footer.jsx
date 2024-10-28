import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faBook } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="bg-gradient-to-r from-orange-300 to-purple-300 sm:h-56 h-96 p-5  flex sm:flex-row flex-col items-center justify-evenly text-white shadow-lg">
      <div className="flex-col mb-5 sm:mb-0 mt-5">
        <div className="flex sm:space-x-4 space-x-2">
          <FontAwesomeIcon className="text-white text-3xl" icon={faBook} />
          <h1 className="text-xl sm:text-2xl font-bold">BOOKORE</h1>
        </div>
        <div className="flex justify-between gap-8 p-6">
          <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
          <FontAwesomeIcon icon={faFacebook} className="text-2xl" />
          <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
        </div>
      </div>

      <div className="text-center sm:text-left sm:mb-0">
        <h1 className="font-bold text-lg sm:text-xl mb-3">SHOP</h1>
        <p className="font-semibold mb-1">Fiction</p>
        <p className="font-semibold mb-1">Non-Fiction</p>
        <p className="font-semibold mb-1">Children's Books</p>
        <p className="font-semibold mb-1">Best Sellers</p>
      </div>

      <div className="text-center sm:text-left sm:mb-0">
        <h1 className="font-bold text-lg sm:text-xl mb-3">ABOUT</h1>
        <p className="font-semibold mb-1">About Us</p>
        <p className="font-semibold mb-1">Our Authors</p>
        <p className="font-semibold mb-1">Our Commitment</p>
        <p className="font-semibold mb-1">Sustainability</p>
      </div>

      <div className="text-center sm:text-left">
        <h1 className="font-bold text-lg sm:text-xl">NEED HELP?</h1>
        <p className="font-semibold mb-1">FAQs</p>
        <p className="font-semibold mb-1">Shipping & Returns</p>
        <p className="font-semibold mb-1">Contact Us</p>
      </div>
    </div>
  );
}

export default Footer;



