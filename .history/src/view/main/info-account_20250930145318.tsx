import { Outlet, useNavigate } from "react-router-dom"

//  --> Info Account Component
const InfoAccount = () => {
const navigate = useNavigate()
    return (
        <>
        <div className="cont-account-controler">  
            <div className="content-home-btn" data-parent="bar-right">
                <button type="button" className="ui-btn" name=""   data-border data-active onClick={()=> navigate("/home/mon_compte/compte")}><i className="fa-duotone fa-solid fa-receipt"></i> <span>Mon compte</span></button>
                <button type="button" className="ui-btn" name=""   data-border > <i className="fa-duotone fa-users"></i> <span>Devenir membre</span></button>
                <button type="button" className="ui-btn" name=""   data-border> <i className="fa-duotone fa-square-poll-vertical"></i> <span>Tableau de bord</span></button>
                <button type="button" className="ui-btn" name=""  color="red" data-border ><i className="fa-duotone fa-solid fa-trash"></i> <span>Supprimer le compte</span></button>
                <button type="button" className="ui-btn" name=""  color="red" data-border ><i className="fa-duotone fa-solid fa-right-from-bracket"></i> <span>Se deconnecter</span></button>
            </div>
        </div>
        <Outlet/>
        </>
    )
}

export default InfoAccount