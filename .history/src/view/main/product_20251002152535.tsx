import Input from "../../components/basic/input"

const Product = () => {
    return (
        <>
        <div className="products-head">
            <span><i className="fa-light fa-cart-circle-plus"></i> Game de produit adultes</span>
            <Input icon="fa-regular fa-at" type="text" placeholder="Rechercher des produits"  />
        </div>
        <div className="product-category">
            <div className="category-item" data-name="all">
                <i className="fa-light fa-border-all"></i>
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