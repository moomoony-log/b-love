// --> Item Publication Modal

const ItemPub = () => {
    return(
        <>
        <div className="modal" data-name="pub-item" data-show>
                <div className="box">
                    <div className="modal-head">
                        <span className="title">
                            <i className="fa-regular fa-pen"></i> 
                         </span>
                        <span className="exit"><i className="fa-solid fa-circle-xmark"></i></span>
                    </div>
                    <div className="body">


                    </div>
                    <div className="controler">
                        <button type="button" className="ui-btn" name=""  data-size="large"  color=""> <i className="fa-regular fa-pen"></i> Publier</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemPub