// Import Styles
import style from "../Cart/Cart.module.css"

// Import Components
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";


function Cart() {

    return(
        <div className={style.cart}>
            <header>
                <Navbar/>
            </header>

            <main>
                <div>
                    
                </div>
            </main>

            <footer>
                <Footer/>
            </footer>
        </div>
    )
}

export default Cart;