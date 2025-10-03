// Import Style
import style from "./PublishProductForm.module.css"

// Import React
import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useMutation } from "@tanstack/react-query";

// Import Type
import type { ProductDB } from "../../types/OthersTypes";

// Import Services
import { productService } from "../../data/services";


function PublishProductForm() {

    const navigate = useNavigate();
    const { category } = useParams<{ category: string }>();

    const [product, setProduct] = useState<ProductDB>({
        idProduct: 37, 
        category: category ?? "",
        description: "",
        img: "",
        colors: [],
        brands: [],
        rating: 0,
        title: "",
        price: 0,
        withDiscount: false,
        inStock: true,
        freeShipping: false,
        prime: false,
        by: "",
    });

    //     // Function for normalize string
    // const normalizeString = (text: string): string => text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

    const capitalize = (text: string) =>
        text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();


    const handleChange = ( e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

    const target = e.target as HTMLInputElement;
    const { name, value, type, checked } = target;

        setProduct((prev) => ({
        ...prev,

        [name]: type === "checkbox" 
        ? checked 
        : type === "number"
            ? Number(value)
            : value,
        }));
    };

    const handleArrayChange = (name: "colors" | "brands", value: string) => {
        setProduct((prev) => ({
        ...prev,
        [name]: value.split(",").map((v) => v.trim()),
        }));
    };
    
    
    // -------------------------------------------------------------------------------------------------------------
    // -------------------------- IMPLEMENTANDO SERVICIOS CON REACT QUERY USE-MUTATION-------------------------------
    

    const mutation = useMutation({
        mutationFn: productService.postProduct
    })

    
    
    // -------------------------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------------------------
    

    const handleSubmit = (e: React.FormEvent) => {
            e.preventDefault();

            // ----- IMPLEMENTANDO SERVICIOS CON REACT QUERY USE-MUTATION -----------
            mutation.mutate({
                productNew: product,
                category: category ?? "",
            })
                
            setProduct({
                idProduct: 0,
                category: category ?? "",
                description: "",
                img: "",
                colors: [],
                brands: [],
                rating: 0,
                title: "",
                price: 0,
                withDiscount: false,
                inStock: true,
                freeShipping: false,
                prime: false,
                by: "",
            });

            navigate(`/`);
        };


    return (
        <div className={style.publishProductForm}>
                    {/* <div className="flex flex-col items-center pt-[3rem] w-screen h-fit bg-gradient-to-b from-amber-200 from-50% to-gray-200 to-50%"> */}
            <h2>!Perfecto! Veamos que producto de {category} quieres ofrecer...</h2>

            <form onSubmit={handleSubmit}>
                <label className={style.textInput}>
                    <p>Título <span>*</span></p>
                    <input
                        type="text"
                        name="title"
                        value={product.title}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label className={style.textInput}>
                    <p>Categoria <span>*</span></p>
                    <input
                        type="text"
                        name="category"
                        value={capitalize(category ?? "")}
                        required
                        disabled
                    />
                </label> 

                <label>
                    <p>Descripción <span>*</span></p>
                    <textarea
                        name="description"
                        value={product.description}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label className={style.textInput}>
                    <p>URL de imagen <span>*</span></p>
                    <input
                        type="text"
                        name="img"
                        value={product.img}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label className={style.textInput}>
                    <p>Colores (separados por coma)</p>
                    <input
                        type="text"
                        name="colors"
                        value={product.colors}
                        onChange={(e) => handleArrayChange("colors", e.target.value)}
                    />
                </label>

                <label className={style.textInput}>
                    <p>Marcas (separadas por coma)</p>
                    <input
                        type="text"
                        name="brands"
                        value={product.brands}
                        onChange={(e) => handleArrayChange("brands", e.target.value)}
                    />
                </label>

                <label className={style.numberInput}>
                    <p>Precio <span>*</span></p>
                    <input
                        type="number"
                        name="price"
                        value={product.price == 0 ? "" : product.price}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label className={style.checkboxInput}>
                    <p>Descuento:</p>
                    <input
                        
                        type="checkbox"
                        name="withDiscount"
                        checked={product.withDiscount}
                        onChange={handleChange}
                    />
                </label>

                {product.withDiscount && <label className={style.numberInput}>
                    <p>Precio anterior</p>
                    <input
                        type="number"
                        name="previousPrice"
                        value={product.previousPrice ?? ""}
                        onChange={handleChange}
                    />
                </label>}

                {product.withDiscount && <label className={style.textInput}>
                    <p>Informacion del precio</p>
                    <input
                        type="text"
                        name="priceInfo"
                        value={product.priceInfo ?? ""}
                        onChange={handleChange}
                    />
                </label>}

                <label className={style.checkboxInput}>
                    <p>Envío Gratis:</p>
                    <input
                        
                        type="checkbox"
                        name="freeShipping"
                        checked={product.freeShipping}
                        onChange={handleChange}
                    />
                </label>

                {product.freeShipping || <label className={style.numberInput}>
                    <p>Precio de envío</p>
                    <input
                        type="number"
                        name="shippingPrice"
                        value={product.shippingPrice ?? ""}
                        onChange={handleChange}
                    />
                </label>}

                <label className={style.checkboxInput}>
                    <p>En stock:</p>
                    <input
                        
                        type="checkbox"
                        name="inStock"
                        checked={product.inStock}
                        onChange={handleChange}
                    />
                </label>

                <label className={style.checkboxInput}>
                    <p>Marcar como producto principal:</p>
                    <input
                        
                        type="checkbox"
                        name="prime"
                        checked={product.prime}
                        onChange={handleChange}
                    />
                </label>

            <button 
                className={style.publishButton}
                type="submit">
                    Publicar producto
            </button>
            <button 
                className={style.returnButton}
                onClick={() => navigate("/publicarProducto")}>
                    Cancelar
            </button>
            </form>
        </div>
    )
}

export default PublishProductForm
