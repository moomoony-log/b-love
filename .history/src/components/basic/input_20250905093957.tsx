import { useRef } from "react"

type InputProps = {
    id: string,
    type : 'text' | 'email' | 'password' | 'date',
    name: string,
    placeholder: string,
    icon: string,
    validation: {
        minLenght?: number,
        maxLenght?: number,
    }
}

function Input({id, type, name, placeholder, icon}: InputProps) {

    const inputRef = useRef<HTMLInputElement>(null)

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