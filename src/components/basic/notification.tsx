import { useEffect, useState } from "react"

// Notification component
interface notifsProps {
    title: string,
    type: 'exit' | 'good' | 'await',
    text: string
}


const NotificationItem = ({title, type, text}:notifsProps) => {
    const [active, setActive] = useState<boolean>(true)

    useEffect(() => {
        setTimeout(() => {
            setActive(false)
        }, 5000 )
    })

    return (
        <>
            <div className="notif-item" data-name={type} {...(active ? { "data-show": "" } : {})}>
                <span className="icon"><i className="fa-regular fa-shield-exclamation"></i></span>
                <div className="notif-text-content">
                    <span className="title">{title}</span>
                    <span className="text">{text}</span>
                </div>
                <i className="fa-solid fa-xmark exit" onClick={ () => { setActive(false) } }></i>
            </div>
        </>
    )


}

export default NotificationItem