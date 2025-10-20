// --> Item Publication Modal

const ItemPub = () => {
    return(
        <>
        <div className="modal" data-name="pub-item" data-show>
                <div className="box">
                    <div className="modal-head">
                        <div className="title">
                            <div className="cont-account-img" data-name="pub-item"><img src="../img/cardi_b.webp"/></div>
                            <div className="identity">
                                <span>GAOUSSOU Toure</span>
                                <span>05 Jan 2024 17h25</span>
                            </div>
                         </div>
                        <span className="exit"><i className="fa-solid fa-xmark"></i></span>
                    </div>
                    <div className="body">
                        <span className="about-pub">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi doloremque dignissimos reprehenderit sapiente, a maiores voluptate delectus illum perspiciatis corrupti labore, eaque sit! Totam, reiciendis!
                        </span>
                        <div className="medias-cont">
                            <div className="cont-account-img" data-name="pub-item"><img src="../img/cardi_b.webp"/></div>
                            <div className="cont-account-img" data-name="pub-item"><img src="../img/cardi_b.webp"/></div>
                            <div className="cont-account-img" data-name="pub-item"><img src="../img/cardi_b.webp"/></div>
                            <div className="cont-account-img" data-name="pub-item"><img src="../img/cardi_b.webp"/></div>
                            <div className="cont-account-img" data-name="pub-item"><img src="../img/cardi_b.webp"/></div>
                            <div className="cont-account-img" data-name="pub-item"><video src="../videos/Standard_Mode_Le_b_b__sirote_son_champagne_en_.mp4" ></video></div>
                        </div>


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