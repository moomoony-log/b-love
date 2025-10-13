// --> Modal Publication
const PublicationModal = () => {
    return (
        <>
        <div className="modal" data-name="publication" data-show>
                <div className="box">
                    <div className="modal-head">
                        <span className="title"><i className="fa-regular fa-shield-check"></i> Confirmation</span>
                        <span className="exit"><i className="fa-solid fa-circle-xmark"></i></span>
                    </div>
                    <div className="body">
                       
                    </div>
                    <div className="controler">
                        <button type="button" className="ui-btn" name=""  data-size="large"  color="blue"> <i className="fa-regular fa-circle-xmark"></i> Annuler</button>
                        <button type="button" className="ui-btn" name=""  data-size="large"  color="red"> <i className="fa-regular fa-shield-check"></i> Confirmer</button>
                    </div>
                </div>
            </div>
        </>
    )

}

export default PublicationModal