import Input from "../../components/basic/input"

const Product = () => {
    return (
        <>
        <div className="products-head">
            <span>Game de produit adultes</span>
            <Input icon="fa-regular fa-at" type="number" placeholder="Rechercher des produits"  />
        </div>
        <div className="products-container">
            
        </div>
        
        </>
    )
}

export default Product