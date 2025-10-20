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
                        <Button children={false} to={false} icon="fa-regular fa-user" type="button"name="Acceder au compte" color="gray" />
                        <Button children={false} to={false} icon="fa-regular fa-star" type="button"name="Ajouter aux favaories" color="gray" />
                        <Button children={false} to={false} icon="fa-regular fa-phone" type="button"name="Ne plus suivre" color="gray" />
                        <Button children={false} to={false} icon="fa-regular fa-phone" type="button"name="WhatsApp" color="gray" />
                        <Button children={false} to={false} icon="fa-regular fa-phone" type="button"name="Signaler" color="red" />

                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemPub