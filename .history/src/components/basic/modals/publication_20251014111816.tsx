// --> Modal Publication
const PublicationModal = () => {
    return (
        <>
            <div className="modal" data-name="publication" data-show>
                <div className="box">
                    <div className="modal-head">
                        <span className="title"><i className="fa-regular fa-pen"></i> Publier</span>
                        <span className="exit"><i className="fa-solid fa-circle-xmark"></i></span>
                    </div>
                    <div className="body">
                        <div className="publication-text"><textarea name="" id="" placeholder="Publier quelques chose de sexy..."></textarea></div>
                        <div className="files">
                            <label htmlFor="file"><i className="fa-duotone fa-solid fa-files"></i> Choisir des photos ou videos sexy</label>
                            <input id="file" type="file" multiple />
                        </div>
                        <div className="medias-parameter">
                            <div className="img-container">
                                <div className="cont-account-img" data-name="publication">
                                    <img src="./" alt="photo" />
                                </div>
                                <div className="cont-account-img" data-name="publication">
                                    <video src="../../videos/Standard_Mode_Le_b_b__sirote_son_champagne_en_.mp4" ></video>
                                </div>
                            </div>
                            <div className="parameter">

                            </div>
                        </div>
                    </div>
                    <div className="controler">
                        <button type="button" className="ui-btn" name=""  data-size="large"  color="blue"> <i className="fa-regular fa-pen"></i> Publier</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PublicationModal