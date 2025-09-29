// Import Style
import style from "./Checkout.module.css"

// Import React
import { useContext, useState } from "react";
import { Link } from "react-router";

// Import Context
import CartContext from "../../context/CartContext";




function CheckoutShipping() {

    // Cart Context 
    const productCart = useContext(CartContext);
    if (!productCart){
        throw new Error('useCart must be used within a CartProvider');
    }

    const [shippingEnd, setShippingEnd ]= useState(0);

    const productsByType = [...new Set(productCart.contextState)];
    const productsAll = productCart.contextState;

    const totalPriceProduct = productsAll
        ? productsAll.reduce((acc, p) => acc + (p.price ?? 0), 0)
        : 0;

    const totalPriceShipping = productsByType
        ? productsByType.reduce((acc, p) => acc + (p.shippingPrice ?? 0), 0)
        : 0;
    
    const totalPrice = totalPriceProduct + shippingEnd;

    return (
        <div className={style.checkoutShipping}>
            
            <section >
{/* 
            
            <h1 className="text-2xl font-semibold mt-[1.25rem] mb-[1.25rem] ml-[1rem] mr-[1.5rem]">Elegí la forma de entrega</h1>
            
            
            <div className="mb-[1rem] bg-white rounded-md">
                <section className="flex justify-between pt-[1.25rem] pb-[1.25rem] pl-[1.5rem] pr-[1.5rem]">
                    <div className="flex">
                        <input 
                            type="checkbox"
                            checked={shippingEnd === totalPriceShipping}
                            onChange={() => setShippingEnd(totalPriceShipping)}
                            />
                            <div className="pl-5 ">
                                <h3 className="font-semibold text-xl pb-2">Enviar a domicilio</h3>
                                <p className="pb-2 text-neutral-700">Domicilio</p>
                                <p className="pb-2 text-neutral-700">Tipo de domicilio</p>
                            </div>
                    </div>
                    <div className="flex justify-end">
                        <h3 className="font-semibold text-2xl">$ {totalPriceShipping !== 0? totalPriceShipping.toLocaleString('es-AR') : 0}</h3>
                    </div>
                </section> 
                <div className="flex pt-[1.25rem] pb-[1.25rem] pl-[1.5rem] pr-[1.5rem] border-t-1 border-neutral-200">
                    <h4 className="text-blue-700 text-lg">Modificar domicilio o elegir otro</h4>
                </div>
            </div>

            <div  className="mb-[1rem] bg-white rounded-md">
                <section className="flex justify-between pt-[1.25rem] pb-[1.25rem] pl-[1.5rem] pr-[1.5rem]">
                    <div className="flex">
                        <input 
                            type="checkbox"
                            checked={shippingEnd === (totalPriceShipping-(totalPriceShipping*20/100))}
                            onChange={() => setShippingEnd((totalPriceShipping-(totalPriceShipping*20/100)))}
                            />
                            <div className="pl-5 ">
                                <h3 className="font-semibold text-xl pb-2">Retiro en punto de entrega</h3>
                                <p className="pb-2 text-neutral-700">Domicilio</p>
                                <p className="pb-2 text-neutral-700">Horario y Fecha</p>
                            </div>
                    </div>
                    <div className="flex justify-end">
                        <h3 className="font-semibold text-2xl">$ {totalPriceShipping !== 0? (totalPriceShipping-(totalPriceShipping*20/100)).toLocaleString('es-AR') : 0}</h3>
                    </div>
                </section> 
                <div className="flex pt-[1.25rem] pb-[1.25rem] pl-[1.5rem] pr-[1.5rem] border-t-1 border-neutral-200">
                    <h4 className="text-blue-700 text-lg">Ver punto en el mapa o elegir otro</h4>
                </div>
            </div>

            <div  className="mb-[1rem] bg-white rounded-md">
                <section className="flex justify-between pt-[1.25rem] pb-[1.25rem] pl-[1.5rem] pr-[1.5rem]">
                    <div className="flex">
                        <input 
                            type="checkbox"
                            checked={shippingEnd === 0}
                            onChange={() => setShippingEnd(0)}
                            />
                            <div className="pl-5 ">
                                <h3 className="font-semibold text-xl pb-2">Retirar en el domicilio del vendedor</h3>
                                <p className="pb-2 text-neutral-700">Domicilio</p>
                            </div>
                    </div>
                    <div className="flex justify-end">
                        <h3 className="font-semibold text-xl text-green-500">GRATIS</h3>
                    </div>
                </section> 
            </div>
            <div className="flex justify-end">
                <Link to="/carrito">
                    <button className="bg-neutral-200 text-neutral-700 font-semibold w-[7rem] h-[2.8rem] rounded-md cursor-pointer hover:bg-neutral-300 mr-2">
                            Volver
                    </button>
                </Link>
                <Link to="" className="">
                    <button className="bg-blue-500 text-white font-semibold w-[7rem] h-[2.8rem] rounded-md cursor-pointer hover:bg-blue-700">
                            Continuar
                    </button>
                </Link>
            </div> */}
        </section>

            
        {/* SECTION END PRICE */}
        <section className={style.summary}>
                <h2 className="font-semibold mb-[1rem] pl-[1.5rem] pr-[1.5rem] ">Resumen de compra</h2>
                <div className=" pl-[1.5rem] pt-[1rem] pb-[1rem] mb-2 border-t-1 border-b-1 border-neutral-200">
                    <div className="flex flex-3 flex-row-[1fr_2fr_1f] pr-[1.5rem] justify-between text-neutral-700">
                        <p className="">Producto</p>
                        <p className="">$ {totalPriceProduct !== 0? totalPriceProduct.toLocaleString('es-AR') : 0}</p>
                    </div>
                    <div className="flex flex-3 flex-row-[1fr_2fr_1f] pr-[1.5rem] justify-between text-neutral-700">
                        <p className="">Envío</p>
                        <p className="">$ {shippingEnd.toLocaleString('es-AR') }</p>
                    </div>
                </div>
                <div className="flex flex-3 flex-row-[1fr_2fr_1f] pr-[1.5rem] justify-between pl-[1.5rem] pt-[1rem] mb-2 ">
                    <p className="font-semibold">Total</p>
                    <p className="font-semibold">$ {totalPrice !== 0? totalPrice.toLocaleString('es-AR') : 0}</p>
                </div>
        </section>
    </div>
    )
}

export default CheckoutShipping;