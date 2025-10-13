// --> BUTTON COMPONENTS

interface buttonProps {
    name: string,
    size: string,
    color: string,
    outline?: string,
    

}


const Button = ({name, color, size}:buttonProps) => {

    return (
        <>
            <button type="button" className="ui-btn" name={name}  data-size={size} color={color}>
                {name} 
                <i className="fa-solid fa-circle-question"></i> 
            </button>
        </>
    )

}

export default Button