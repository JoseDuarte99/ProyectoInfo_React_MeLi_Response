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
        {/* <div className="h-[2.5rem] w-[36.75rem] flex items-center bg-white shadow-gray-400 shadow-sm"> */}
            <input 
                value={onSearch}
                onChange={searching}
                className={style.inputSearch}
                type="search" 
                placeholder={ placeholder }
            />
            <button className={style.buttonSearch}>
                <img src={imgSearch} alt="Lupa" />
            </button>
            {/* <button type="submit" className="cursor-pointer !bg-white rounded-none p-0">
                <img className="h-[1.5rem] mt-2 mb-2 pl-3 pr-4 pb-1 border-l-1 border-l-gray-300" src={imgSearch} alt="Lupa" />
            </button> */}
        </div>
    );
}

export default Search