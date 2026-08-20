import { createContext, useState } from "react";

const ProductContext = createContext()

const ProductContextProvider = ({children}) => {

    const [products, setProducts] = useState([
        {
            title: 'Tv samsung 32"',
            price: 320000,
            id: 1
        },
        {
            title: 'Tv samsung 42"',
            price: 420000,
            id: 2
        },
        {
            title: 'Tv samsung 52"',
            price: 520000,
            id: 3
        },
    ])

    function deleteProductById (product_id) {
        const products_state_cloned = [...products]
        for(let i = 0; i < products_state_cloned.length; i++){
            const product = products[i]
            if(product.id === product_id){
                products_state_cloned.splice(i, 1)
                break;
            }
        }
        setProducts(products_state_cloned)
    }

    function deleteAllProducts (){
      
        setProducts([])
    }

    const provider_values = {
        products: products,
        deleteAllProducts: deleteAllProducts,
        deleteProductById: deleteProductById,
        palabra_favorita: 'pepito'
    }
    return (
        <ProductContext.Provider value={provider_values}>
            {children}
        </ProductContext.Provider>
    )
}

export {ProductContextProvider, ProductContext}