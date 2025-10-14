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
                       <div className="ui-input" data-name="publication-text"><input type="text" placeholder="Poster quelque chose de sexy" autoComplete="off"/></div>
                       <div className="input">
                            <label><i className="fa-duotone fa-solid fa-files"></i> Choisir des photos ou videos sexy</label>
                            <input type="file" multiple />
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