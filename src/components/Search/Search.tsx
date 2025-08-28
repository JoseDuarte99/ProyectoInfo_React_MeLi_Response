// Import Style
import style from "./Search.module.css"

// Import Types
import type { SearchProps } from "../../types/SearchType";



function Search(props: SearchProps){
    const { placeholder, imgSearch, onSearch, setOnSearch, className} = props

    const searching = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOnSearch(e.target.value);
    };

    return(
        <div className={className}>
            <input 
                value={onSearch}
                onChange={searching}
                className={style.inputSearch}
                type="search" 
                placeholder={ placeholder }
            />
            <button type="submit" className={style.buttonSearch}>
                <img src={imgSearch} alt="Lupa" />
            </button>
        </div>
    );
}

export default Search