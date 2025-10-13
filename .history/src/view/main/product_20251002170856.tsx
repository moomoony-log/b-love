import { useEffect, useRef } from "react"
import Input from "../../components/basic/input"
import Button from "../../components/basic/button"

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
           <div>
                <span><i className="fa-light fa-cart-circle-plus"></i> Game de produit adultes</span>
                <Input icon="fa-regular fa-magnifying-glass" type="text" placeholder="Rechercher des produits" />
           </div>
           <Button children={false} to={false} type="button" name="Vendre" icon="fa-solid fa-handshake" border color="gray" />
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
                <div className="cont-account-img" data-name="product"><img src="../img/cardi_b.webp" alt="account-image"/></div>
                <span className="descrip">Produit pour adulte en bonne santé donc rests au clalaùee</span>
                <div className="detail">
                    <span><i className="fa-duotone fa-solid fa-money-bill-wave"></i> 1 250 000 F</span>
                    <span>Abidjan</span>
                </div>
            </div>
            <div className="product-item">
                <div className="cont-account-img" data-name="product"><img src="../img/cardi_b.webp" alt="account-image"/></div>
                <span className="descrip">Produit pour adulte en bonne santé donc rests au clalaùee</span>
                <div className="detail">
                    <span><i className="fa-duotone fa-solid fa-money-bill-wave"></i> 1 250 000 F</span>
                    <span>Yopougon</span>
                </div>
            </div>
            <div className="product-item">
                <div className="cont-account-img" data-name="product"><img src="../img/cardi_b.webp" alt="account-image"/></div>
                <span className="descrip">Produit pour adulte en bonne santé donc rests au clalaùee</span>
                <div className="detail">
                    <span><i className="fa-duotone fa-solid fa-money-bill-wave"></i> 1 250 000 F</span>
                    <span>Yopougon</span>
                </div>
            </div>
            <div className="product-item">
                <div className="cont-account-img" data-name="product"><img src="../img/cardi_b.webp" alt="account-image"/></div>
                <span className="descrip">Produit pour adulte en bonne santé donc rests au clalaùee</span>
                <div className="detail">
                    <span><i className="fa-duotone fa-solid fa-money-bill-wave"></i> 1 250 000 F</span>
                    <span>Yopougon</span>
                </div>
            </div>
            <div className="product-item">
                <div className="cont-account-img" data-name="product"><img src="../img/cardi_b.webp" alt="account-image"/></div>
                <span className="descrip">Produit pour adulte en bonne santé donc rests au clalaùee</span>
                <div className="detail">
                    <span><i className="fa-duotone fa-solid fa-money-bill-wave"></i> 1 250 000 F</span>
                    <span>Yopougon</span>
                </div>
            </div>
            <div className="product-item">
                <div className="cont-account-img" data-name="product"><img src="../img/cardi_b.webp" alt="account-image"/></div>
                <span className="descrip">Produit pour adulte en bonne santé donc rests au clalaùee</span>
                <div className="detail">
                    <span><i className="fa-duotone fa-solid fa-money-bill-wave"></i> 1 250 000 F</span>
                    <span>Yopougon</span>
                </div>
            </div>
            <div className="product-item">
                <div className="cont-account-img" data-name="product"><img src="../img/cardi_b.webp" alt="account-image"/></div>
                <span className="descrip">Produit pour adulte en bonne santé donc rests au clalaùee</span>
                <div className="detail">
                    <span><i className="fa-duotone fa-solid fa-money-bill-wave"></i> 1 250 000 F</span>
                    <span>Yopougon</span>
                </div>
            </div>
            <div className="product-item">
                <div className="cont-account-img" data-name="product"><img src="../img/cardi_b.webp" alt="account-image"/></div>
                <span className="descrip">Produit pour adulte en bonne santé donc rests au clalaùee</span>
                <div className="detail">
                    <span><i className="fa-duotone fa-solid fa-money-bill-wave"></i> 1 250 000 F</span>
                    <span>Yopougon</span>
                </div>
            </div>
            <div className="product-item">
                <div className="cont-account-img" data-name="product"><img src="../img/cardi_b.webp" alt="account-image"/></div>
                <span className="descrip">Produit pour adulte en bonne santé donc rests au clalaùee</span>
                <div className="detail">
                    <span><i className="fa-duotone fa-solid fa-money-bill-wave"></i> 1 250 000 F</span>
                    <span>Yopougon</span>
                </div>
            </div>

        </div>
        
        </>
    )
}

export default Product