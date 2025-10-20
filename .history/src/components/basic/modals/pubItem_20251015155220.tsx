// --> Item Publication Modal

import Button from "../button"

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
                                <span>05 Jan 2024, 17h25</span>
                            </div>
                         </div>
                        <span className="exit"><i className="fa-solid fa-xmark"></i></span>
                    </div>
                    <div className="body">
                        <div className="about-pub" data-data>
                            harum amet molestiae, sapiente atque vero😂, in quam aspernatur! Quidem praesentium veniam quibusdam magnam, neque adipisci aut! Magnam sapiente dolore dolores mollitia.
                        </div>
                        <div className="medias-cont">
                            <div className="cont-account-img" data-name="pub-item-img"><img src="../img/cardi_b.webp"/></div>
                            <div className="cont-account-img" data-name="pub-item-img"><img src="../img/cardi_b.webp"/></div>
                            <div className="cont-account-img" data-name="pub-item-img"><img src="../img/cardi_b.webp"/></div>
                            <div className="cont-account-img" data-name="pub-item-img"><img src="../img/cardi_b.webp"/></div>
                            <div className="cont-account-img" data-name="pub-item-img"><img src="../img/cardi_b.webp"/></div>
                            <div className="cont-account-img" data-name="pub-item-img"><video src="../videos/Standard_Mode_Le_b_b__sirote_son_champagne_en_.mp4" ></video></div>
                            <div className="cont-account-img" data-name="pub-item-img"><video src="../videos/Standard_Mode_Le_b_b__sirote_son_champagne_en_.mp4" ></video></div>
                        </div>
                        <div className="pub-info">
                            <div className="one">
                                <Button children={false} outline="true" icon="fa-regular fa-heart" to={false} type="button" name="Aimer" small="small-3"  />
                                <span className="like">365.5k Jaime</span>
                            </div>
                            <div className="two">
                                
                                <Button children={false} to={false} type="button"name="WhatsApp" />

                            </div>

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