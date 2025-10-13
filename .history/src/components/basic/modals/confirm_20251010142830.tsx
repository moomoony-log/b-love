// --> ConfirmModalComponent 

type ConfirmPropsModal = {
    title:string,
    confirm_text: string
}

const ConfirmModal = ({title, confirm_text}: ConfirmPropsModal) => {

    return (
        <>
        <div className="modal" data-name="confirm" data-show>
                <div className="box">
                    <div className="modal-head">
                        <span className="title"><i className="fa-regular fa-shield-check"></i> Confirmation</span>
                        <span className="exit"><i className="fa-solid fa-circle-xmark"></i></span>
                    </div>
                    <div className="body" data-type="good">
                        <span className="icon"><i className="fa-light fa-trash"></i></span>
                        <span className="title">{title}</span>
                        <span className="confirm-text">{confirm_text}</span>
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

export default ConfirmModal