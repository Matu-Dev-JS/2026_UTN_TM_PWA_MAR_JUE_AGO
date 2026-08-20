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
    const provider_values = {
        products: products
    }
    return (
        <ProductContext.Provider value={provider_values}>
            {children}
        </ProductContext.Provider>
    )
}

export {ProductContextProvider, ProductContext}