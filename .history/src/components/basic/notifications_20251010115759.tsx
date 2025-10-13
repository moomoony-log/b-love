// Notification component


const Notification = () => {
    return (
        <>
        
            <div className="notif-item" data-name="exit" data-show>
                <span className="icon"><i className="fa-regular fa-shield-exclamation"></i></span>
                <div className="notif-text-content" >
                    <span className="title">ATTENTION</span>
                    <span className="text">Opps! vous venez de vous de connectez</span>
                </div>
                <i className="fa-solid fa-xmark exit"></i>
            </div>

            {/* <div class="notif-item"  name="good">
                <span class="icon"><i class="fa-regular fa-shield-check"></i></span>
                <div class="notif-text-content" >
                    <span class="title">DECONNEXION</span>
                    <span class="text">Opps! vous venez de vous de connectez. Vous pouverz reessayer plus tard</span>
                </div>
                <i class="fa-solid fa-xmark exit"></i>
            </div>
            <div class="notif-item"  name="await">
                <span class="icon"><i class="fa-regular fa-shield-exclamation"></i></span>
                <div class="notif-text-content" >
                    <span class="title">DECONNEXION</span>
                    <span class="text">Opps! vous venez de vous de connectez. Vous pouverz reessayer plus tard. </span>
                </div>
                <i class="fa-solid fa-xmark exit"></i>
            </div> */}
        
        </>
    )


}

export default Notification