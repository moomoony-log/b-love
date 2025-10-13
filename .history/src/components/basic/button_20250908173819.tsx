// --> BUTTON COMPONENTS

interface buttonProps {
    name: string,
    icon:string,
    size: string,
    color: string,
    outline?: string,
    navigate?: string,
    inner?:string,
    onclick: () => unknown
}
const Button = ({name,icon, size, color, outline, navigate, inner, onclick}:buttonProps) => {

    return (
        <>
            <button 
                type="button" 
                className="ui-btn" 
                name={name}  
                data-size={size} 
                color={color} 
                { ...(outline ? {"data-outline": ""} : {})}
                { ...(navigate ? {"data-navigate": ""} : {})}
                { ...(inner ? {"data-inner": ""} : {})}
                onClick={onclick}
                >
                { name } <i className={icon}></i> 
            </button>
        </>
    )

}

export default Button