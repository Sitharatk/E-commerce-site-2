import  { createContext, useEffect ,useState} from 'react'
import axios from 'axios';

export const shopContext=createContext();
function ShopProvider({children}) {
    const [products,setProducts]=useState([])

    useEffect(()=>{
        axios.get("http://localhost:3000/products")
        .then((response)=>setProducts(response.data))
    },[])
  return (
    <shopContext.Provider value={{setProducts,products}}>
        {children}
    </shopContext.Provider>
  )
}

export default ShopProvider