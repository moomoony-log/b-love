// --> BUTTON COMPONENTS

interface buttonProps {
    name: string,
    size: string,
    color: string

}


const Button = ({name, color, size}:buttonProps) => {

    return (
        <>
            <button type="button" className="ui-btn" name={name}  data-size={size} color={color}>
                Vous n'avez pas de compte  
                <i className="fa-solid fa-circle-question"></i> 
            </button>
        </>
    )

}

export default Button