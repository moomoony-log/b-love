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
            <Input icon="fa-regular fa-at" type="text" placeholder="Rechercher des produits"  />
        </div>
        <div className="product-category">
            <div className="category-item">
                <i className="fa-light fa-search"></i>
                <div>
                    <span>Tout</span>
                    <span>255</span>
                </div>
            </div>
        </div>
        <div className="products-container">
            
        </div>
        
        </>
    )
}

export default Product