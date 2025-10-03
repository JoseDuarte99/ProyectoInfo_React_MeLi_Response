// Import Style
import style from "./ProductById.module.css"

// Import React
import { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { useMutation, useQuery } from "@tanstack/react-query";

// Import Components
import CartContext from "../../context/CartContext";
import { LoadingProduct, ProductNotFound } from "../../components/FetchingData/FetchingData";

// Import Types
import type { ProductCartType } from "../../types/ProductCartType";

// Import Servies
import { productService } from "../../data/services";


function ProductById (){
    const navigate = useNavigate();
    
    const productCart = useContext(CartContext);
    if (!productCart){
        throw new Error('useCart must be used within a CartProvider');
    }
    
    const { id } = useParams<{ id: string }>();
    
    // -------------------------------------------------------------------------------------------------------------
    // --------------------------------- IMPLEMENTANDO SERVICIOS CON REACT QUERY -----------------------------------
    
    
    const mutation = useMutation({
        mutationFn: productService.deleteProduct
    })
    
    const { isPending, isError, data, error } = useQuery({
        queryKey:["getProduct", id],
        queryFn: () => productService.getProductById(id ? id : ""),
        enabled: !!id,
    })
    
    if (isPending) {
        return <LoadingProduct/>
    }
    
    if (isError) {
        console.error(error);
        return <ProductNotFound/>
    }
    
    const product = data;
    
    
    // -------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------
    
    
    const addCart = (product: ProductCartType) => {
        productCart.addProductCart([product]);
        navigate(`/carrito`);
    };
    
    const buyProduct = (product: ProductCartType) => {
        productCart.resetCart();
        productCart.addProductCart([product]);
        navigate(`/checkout`);
    };
    
    const deleteProduct = (product: ProductCartType) => {
        const confirmado = confirm("¿Estás seguro de que querés eliminar este producto?");
        if (confirmado) {
            mutation.mutate(String(product.idProduct))
        }
    };
    
    if (mutation.isSuccess) navigate("/");
    
    return (
        mutation.isPending 
        ? <LoadingProduct/> 
        : <div className={style.productById}>
                <Link to="/" className={style.return}>
                    Volver
                </Link>
            
            {product 
                ? <>
                    
                    {/* IMG PRODUCT */}
                    <div className={style.productImage}>
                        <img src={product.img} alt={product.title} />
                    </div>
                    
                    {/* INFO PRODUCT */}
                    <div className={style.productInfo}>
                        <span>Recomendado</span>
                        <h3>{product.title}</h3>
                        
                        <span>Calficacion</span>
                        <p> {product.previousPrice !== undefined ? `$${product.previousPrice}` : ""}</p>
                        <h4>${product.price.toLocaleString('es-AR')}</h4>
                        
                        <p>{product.priceInfo}</p>
                        {product.freeShipping && <p>Envío Gratis</p>}
                    </div>

                    <div className={style.buttons}> 
                        <button 
                            onClick={() => buyProduct(product)}
                            className={style.buyNow}>
                            Comprar ahora
                        </button>
                        <button 
                            onClick={() => addCart(product)}
                            className={style.addCart}>
                            Agregar al carrito
                        </button>
                        {product.by &&                    
                            <button 
                                onClick={() => deleteProduct(product)}
                                className={style.deleteProduct}>
                                Eliminar Producto 
                            </button>
                        }
                    </div>
                    
                    <div className={style.productDescription}>
                        <p>Descripción:</p>
                        <p>{product.description}</p>
                    </div>
                </>
                : <ProductNotFound/>}
            </div>
        )
    }
    
    export default ProductById;