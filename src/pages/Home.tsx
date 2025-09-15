// Import Styles
import style from "./Home.module.css"

// Import Components
import SectionCard from "../components/SectionCard/SectionCard"
import ProductCard from "../components/ProductCard/ProductCard";

// Import Data
import { productsDB } from "../data/db"



function Home() {
    return (
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
                            />
                        );})
                    }
                </SectionCard>
            </div>
        </main>
    )
}

export default Home