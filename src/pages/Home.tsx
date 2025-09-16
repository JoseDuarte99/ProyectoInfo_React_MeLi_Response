// Import Styles
import style from "./Home.module.css"

// Import Components
import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar"
import SectionCard from "../components/SectionCard/SectionCard"
import ProductCard from "../components/ProductCard/ProductCard";

// Import Data
import { productsDB } from "../data/db"

// Import Context
import CartContext from "../context/CartContext";

// Import React
import { useContext } from "react";




function Home() {

    // ProductCart Context 
    const productCart = useContext(CartContext);
    if (!productCart){
        throw new Error('ERROR EN EL CARRITO DE COMPRAS');
    }



    return (
    <>
        <header>
            <Navbar/>
        </header>
        <aside className={style.aside}>

        </aside>
        <main className={style.main}>
            <div className={style.container}>
                <SectionCard titleSection="Lo más vendidos de la semana" link="Ir a Más vendidos">
                    {productsDB.filter((p) => p.idProduct < 8 ).map(product => {
                        return (
                            <ProductCard 
                            key={product.idProduct}
                            idProduct={product.idProduct}
                            category={product.category}
                            img={product.img}
                            title={product.title}
                            previousPrice={product.previousPrice}
                            price={product.price}
                            withDiscount={product.withDiscount}
                            priceInfo={product.priceInfo}
                            freeShipping={product.freeShipping}
                            onClickAdd={() => productCart.addProductCart([product])}
                            onClickRemove={() => productCart.removeProductCart([product])}
                            units={productCart.contextState.filter(p => p.idProduct === product.idProduct).length}                           
                            />
                        );})
                    }
                </SectionCard>
                <SectionCard titleSection="También puede interesarte">
                    {productsDB.filter((p) => p.idProduct >= 8 && p.idProduct < 15).map(product => {
                        return (
                            <ProductCard 
                            key={product.idProduct}
                            idProduct={product.idProduct}
                            category={product.category}
                            img={product.img}
                            title={product.title}
                            previousPrice={product.previousPrice}
                            price={product.price}
                            withDiscount={product.withDiscount}
                            priceInfo={product.priceInfo}
                            freeShipping={product.freeShipping}       
                            onClickAdd={() => productCart.addProductCart([product])}
                            onClickRemove={() => productCart.removeProductCart([product])}
                            units={productCart.contextState.filter(p => p.idProduct === product.idProduct).length}                           
                            />
                        );})
                    }
                </SectionCard>
                <SectionCard titleSection="Productos más buscados de la semana" link="Ir a los más buscados">
                    {productsDB.filter((p) => p.idProduct >= 15 && p.idProduct < 22).map(product => {
                        return (
                            <ProductCard 
                            key={product.idProduct}
                            idProduct={product.idProduct}
                            category={product.category}
                            img={product.img}
                            title={product.title}
                            previousPrice={product.previousPrice}
                            price={product.price}
                            withDiscount={product.withDiscount}
                            priceInfo={product.priceInfo}
                            freeShipping={product.freeShipping}   
                            onClickAdd={() => productCart.addProductCart([product])}
                            onClickRemove={() => productCart.removeProductCart([product])}
                            units={productCart.contextState.filter(p => p.idProduct === product.idProduct).length}                           
                            />
                        );})
                    }
                </SectionCard>
                <SectionCard titleSection="Relacionado con lo último que viste">
                    {productsDB.filter((p) => p.idProduct >= 22 && p.idProduct < 29).map(product => {
                        return (
                            <ProductCard 
                            key={product.idProduct}
                            idProduct={product.idProduct}
                            category={product.category}
                            img={product.img}
                            title={product.title}
                            previousPrice={product.previousPrice}
                            price={product.price}
                            withDiscount={product.withDiscount}
                            priceInfo={product.priceInfo}
                            freeShipping={product.freeShipping}   
                            onClickAdd={() => productCart.addProductCart([product])}
                            onClickRemove={() => productCart.removeProductCart([product])}
                            units={productCart.contextState.filter(p => p.idProduct === product.idProduct).length}                           
                            />
                        );})
                    }
                </SectionCard>
            </div>
        </main>
        <footer>
            <Footer/>
        </footer>
    </>
    )
}

export default Home