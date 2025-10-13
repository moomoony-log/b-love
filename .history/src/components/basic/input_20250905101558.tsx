import { useState } from "react"
import Utils from "../../utils/utils"

type InputProps = {
    id: string,
    type : 'text' | 'email' | 'password' | 'date',
    name: string,
    placeholder: string,
    icon: string,
    validation: {
        minLenght?: number
    }
}

function Input({id, type, name, placeholder, icon, validation}: InputProps) {

    const [value, setValue] = useState('')
    const [isValid, setIsValid] = useState(true)

    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value
        setValue(inputValue)
        if (type === 'text')  return setIsValid(Utils.inputValue(inputValue, validation.minLenght!))

    }


    return (
        <>
            <div className="ui-input" data-name={name} data-error={!isValid ? 'Données incorrect' : ''} data-state={!isValid ? 'bad' : 'good'}>
                <label htmlFor={id}><i className={icon}></i></label>
                <input type={type} placeholder={placeholder} id={id} autoComplete="off" value={value} onChange={onChange}/> 
            </div>
        </>
    )

}

export default Input