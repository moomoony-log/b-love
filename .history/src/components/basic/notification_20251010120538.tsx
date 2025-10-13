// Notification component
interface notifsProps {
    title: string,
    type: 'exit' | 'good' | 'await',
    text: string
}


const NotificationItem = ({title, type, text}:notifsProps) => {
    return (
        <>
            <div className="notif-item" data-name={type} data-show>
                <span className="icon"><i className="fa-regular fa-shield-exclamation"></i></span>
                <div className="notif-text-content" >
                    <span className="title">{title}</span>
                    <span className="text">{text}</span>
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

export default NotificationItem