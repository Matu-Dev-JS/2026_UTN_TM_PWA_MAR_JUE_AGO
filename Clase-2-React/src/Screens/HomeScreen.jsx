import React, { useContext } from 'react'
import { Link } from 'react-router'
import { ProductContext } from '../Context/ProductContext'

const HomeScreen = () => {
    //CONSUMIMOS EL CONTEXTO DE PRODUCTOS
    const { products, palabra_favorita, deleteAllProducts, deleteProductById } = useContext(ProductContext)


    const products_JSX = []
    for (const product of products) {
        products_JSX.push(
            <div key={product.id}>
                <h2>{product.title}</h2>
                <div>Precio: ${product.price} ARS</div>
                <button onClick={() => deleteProductById(product.id)}>Eliminar</button>
            </div>
        )
    }
    return (
        <div>
            <h1>Listado de productos</h1>
            {
                products_JSX
            }
            <button onClick={deleteAllProducts}>Eliminar todos los productos</button>

            <Link to={'/product/new'}>Ir a creador de productos</Link>

        </div>
    )
}

export default HomeScreen



/*   
              products.map(
                    (product) => {
                        return (
                            <div>
                                <h2>{product.title}</h2>
                                <div>Precio: ${product.price} ARS</div>
                                <button>Eliminar</button>
                            </div>
                        )
                    }
                ) */