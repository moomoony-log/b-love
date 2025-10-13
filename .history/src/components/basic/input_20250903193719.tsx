
type InputProps = {
    id: string,
    type : 'text' | 'email' | 'password' | 'select' | 'date',
    name: string,
    placeholder: string,
    icon: string
}

function Input({id, type, name, placeholder, icon}: InputProps) {

    // const inputRef = useRef<HTMLInputElement>(null)

    // if (inputRef.current && 
    //     contraint?.format === 'string' &&
    //     inputRef.current.value <= contraint.lenght.toString() 
    //     ) inputRef.current.parentElement?.setAttribute('data-stade', )

    return (
        <>
            <div className="ui-input" data-name={name} data-error="Données incorrect" data-state="bad">
                <label htmlFor={id}><i className={icon}></i></label>
                <input type={type} placeholder={placeholder} id={id} autoComplete="off"/> 
            </div>
        </>
    )

}

export default Input