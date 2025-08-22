import { useState } from "react";
import style from "./navbar.module.css"

function Navbar() {

    const [menuValue, setMenuValue] = useState(false); 



    return (
        <header className={style.header}>
            <div className={style.container}>
                <div className={style.logo}>Logo</div>
                <div className={style.search}>Search</div>
                <div className={style.advertising}>Advertising</div>
                <div className={style.location}>Location</div>
                <div className={style.buttons}>Buttons</div>
                <div className={style.login}>Login</div>

                <nav className={style.manu}>
                    <input type="checkbox" id="menu" checked={menuValue} className={style.menuInput} onClick={() => setMenuValue(!menuValue)} />   
                    <label htmlFor="menu" className={style.activeMenu}>
                        <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"  
                        fill="currentColor" viewBox="0 0 24 24" >
                        <path d="M4 6h16v2H4zM4 11h16v2H4zM4 16h16v2H4z"></path>
                        </svg>
                    </label>

                    <ul className={style.itemsMenu}>
                                            <input type="checkbox" id="closedMenu" checked={menuValue} className={style.closedMenu} onClick={() => setMenuValue(!menuValue)}/>

                        <li><a href="#">Advertising</a></li>
                        <li><a href="#">Location</a></li>
                        <li><a href="#">Buttons</a></li>
                        <li><a href="#">Login</a></li>
                    </ul>
                </nav>
            </div>


        </header>
    )
}

export default Navbar