// --> ConfirmModalComponent 

const ConfirmModal = () => {

    return (
        <>
        <div className="modal" data-name="confirm" data-show>
                <div className="box">
                    <div className="modal-head">
                        <span className="title"><i className="fa-regular fa-shield-check"></i> Confirmation</span>
                        <span className="exit"><i className="fa-solid fa-circle-xmark"></i></span>
                    </div>
                    <div className="body" type="good">
                        <span className="icon"><i className="fa-light fa-trash"></i></span>
                        <span className="title">Suppression de compte</span>
                        <span className="confirm-text">Voulez vous supprimer ce compte ?</span>
                    </div>
                    <div className="controler">
                        <button type="button" className="ui-btn" name=""  size="large"  color="blue"> <i className="fa-regular fa-circle-xmark"></i> Annuler</button>
                        <button type="button" className="ui-btn" name=""  size="large"  color="red"> <i className="fa-regular fa-shield-check"></i> Confirmer</button>
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default ConfirmModal