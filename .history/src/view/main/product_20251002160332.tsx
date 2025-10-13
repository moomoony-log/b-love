import { useEffect, useRef } from "react"
import Input from "../../components/basic/input"

const Product = () => {
    const productRef = useRef<HTMLDivElement>(null)
    
        useEffect(()=> {
            const parent = productRef.current?.parentElement
            if(parent) parent.setAttribute('data-name', 'product')
            return () => parent?.removeAttribute('data-name')
        }, [])

    return (
        <>
        <div className="products-head" ref={productRef}>
            <span><i className="fa-light fa-cart-circle-plus"></i> Game de produit adultes</span>
            <Input icon="fa-regular fa-magnifying-glass" type="text" placeholder="Rechercher des produits"  />
        </div>
        <div className="product-category">
            <div className="category-item">
                <i className="fa-light fa-border-all"></i>
                <div>
                    <span>Tout</span>
                    <span>255 articles</span>
                </div>
            </div>
            <div className="category-item">
                <i className="fa-light fa-cart-circle-plus"></i>
                <div>
                    <span>Tout</span>
                    <span>255 articles</span>
                </div>
            </div>
            <div className="category-item">
                <i className="fa-light fa-cart-circle-plus"></i>
                <div>
                    <span>Tout</span>
                    <span>255 articles</span>
                </div>
            </div>
        </div>
        <div className="products-container">
            <div className="product-item">
                <img src="C:\Users\gmoumouni\Documents\MyProject\blove_r\blove-client-web\public\img\cardi_b.webp" alt="" />
            </div>
        </div>
        
        </>
    )
}

export default Product