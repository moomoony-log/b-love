// --> Item Publication Modal

const ItemPub = () => {
    return(
        <>
        <div className="modal" data-name="pub-item" data-show>
                <div className="box">
                    <div className="modal-head">
                        <div className="title">
                            <div className="cont-account-img" data-name="publication"><img src="../img/cardi_b.webp"/></div>
                            <div className="identity">
                                <span>GAOUSSOU Toure</span>
                                <span>05 Jan 2024 17h25</span>
                            </div>
                         </div>
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