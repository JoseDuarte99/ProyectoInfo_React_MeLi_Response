// Import Style
import style from "./ProductById.module.css"

// Import React
import { useContext } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { useMutation, useQuery } from "@tanstack/react-query";

// Import Components
import CartContext from "../../context/CartContext";
import LoadingProduct from "../../components/loadingProduct";
import ProductNotFound from "../../components/productNoFound";

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
        mutation.isPending ? <LoadingProduct/> :
        
        <div className={style.productById}>
        <main className="bg-white h-fit mr-[10.3rem] ml-[10.3rem] mt-[5.5rem] rounded-2xl">
        <Link to="/" className="text-neutral-600 font-sans ml-1.5 pb-0.5 pr-2 pl-2 text-center text-sm bg-gray-200 rounded-xl hover:bg-gray-300">
        Volver
        </Link>
        
        {product 
            ? 
            <div className="grid grid-cols-3 gap-5">
            
            {/* IMG PRODUCT */}
            <div className="m-5">
            <img src={product.img} alt={product.title} />
            </div>
            
            {/* INFO PRODUCT */}
            <div className="m-5">
            
            <span className="text-xs text-white bg-black pt-0.5 pb-0.5 pl-1 pr-1 rounded-sm ">Recomendado</span>
            <p className="text-lg font-semibold text-gray-900 ">{product.title}</p>
            
            <span className="text-xs text-blue-700 bg-blue-100 pt-0.5 pb-0.5 pl-1 pr-1 rounded-sm">Calficacion</span>
            <p className="text-neutral-500 text-left text-xs line-through font-sans mt-5">
            {product.previousPrice !== undefined ? `$${product.previousPrice}` : ""}
            </p>
            <h4 className="text-black text-left text-2xl font-medium font-sans">${product.price.toLocaleString('es-AR')}</h4>
            
            <p className="text-green-700 text-left text-xs font-normal mb-2 mt-2 font-sans">{product.priceInfo}</p>
            {product.freeShipping && <p className="text-green-700 text-left text-xs font-bold font-sans ">Envío Gratis</p>}
            </div>
            
            {/* INFORMATION THE PRODUCT AND BUTTON THE SHOPPING */}
            
            <div className="m-5 row-span-2"> 
            <h4 className="text-black text-left text-2xl font-medium font-sans ml-25">${product.price.toLocaleString('es-AR')}</h4>
            <p className="text-neutral-500 text-left text-xs line-through font-sans mt-5 ml-25">
            {product.previousPrice !== undefined ? `$${product.previousPrice}` : ""}
            </p>
            <p className="text-green-700 text-left text-xs font-normal mb-2 mt-2 font-sans ml-25">{product.priceInfo}</p>
            <p className="text-green-700 text-left text-xs font-bold font-sans ml-25">{product.freeShipping}</p>
            
            <button 
            onClick={() => buyProduct(product)}
            className="bg-blue-500 text-white font-semibold mt-[1rem] ml-[1.5rem] mr-[1.5rem] w-[16.3rem] h-[2.8rem] rounded-md cursor-pointer hover:bg-blue-700">
            Comprar ahora
            </button>
            <button 
            onClick={() => addCart(product)}
            className="bg-blue-100 text-blue-500 font-semibold mt-[1rem] ml-[1.5rem] mr-[1.5rem] w-[16.3rem] h-[2.8rem] rounded-md cursor-pointer hover:bg-blue-200">
            Agregar al carrito
            </button>
            {product.by &&                    
                <button 
                onClick={() => deleteProduct(product)}
                className=" text-neutral-500 font-semibold mt-[1rem] ml-[1.5rem] mr-[1.5rem] w-[16.3rem] h-[2.8rem] rounded-md cursor-pointer hover:bg-red-200 hover:text-red-500">
                Eliminar Producto 
                </button>
            }
            
            </div>
            <div className="pl-5 pb-2 col-span-2">
            <p className="text-neutral-500 font-semibold">Descripción:</p>
            <p className="text-neutral-700 text-sm pl-5 pt-1">{product.description}</p>
            </div>
            </div>
            : <ProductNotFound/>}
            </main> 
            </div>
        )
    }
    
    export default ProductById;