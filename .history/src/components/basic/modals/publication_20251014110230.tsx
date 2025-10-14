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
                        <div className="medias-parameter"></div>
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