// --> BUTTON COMPONENTS

interface buttonProps {
    name: string,
    icon:string,
    size: string,
    color: string,
    outline?: string,
    navigate?: string,
    active?: string,
    inner?:string,
}


const Button = ({name,icon, size, color, outline, navigate, active, inner}:buttonProps) => {

    return (
        <>
            <button type="button" className="ui-btn" name={name}  data-size={size} color={color} { ...(outline ? {"data-outline": ""} : {})}>
                {name} 
                <i className={icon}></i> 
            </button>
        </>
    )

}

export default Button