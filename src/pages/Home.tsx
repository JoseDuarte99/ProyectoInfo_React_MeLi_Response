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
                    {productsDB.map(product => {
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
                
                <SectionCard titleSection="También puede interesarte"/>
                <SectionCard titleSection="Productos más buscados de la semana" link="Ir a los más buscados"/>
                <SectionCard titleSection="Relacionado con lo último que viste"/>
            </div>
        </main>
    )
}

export default Home