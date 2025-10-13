import { forwardRef, useId, useImperativeHandle, useState } from "react"
import Utils from "../../utils/utils"

type InputProps = {
    type : 'text' | 'email' | 'password' | 'date',
    name: string,
    placeholder: string,
    icon: string,
    validation?: {
        minLenght?: number
    }
}

export type InputRef = {
    state : () => boolean
}

const Input = forwardRef<InputRef,InputProps>(({type, name, placeholder, icon, validation}, ref) =>{

    const [value, setValue] = useState('')
    const [isValid, setIsValid] = useState(true)
    const userId = useId()

    useImperativeHandle(ref, ()=> ({
        state: ()=> isValid
    }))
      
    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value
        setValue(inputValue)
        if (type === 'text')  return setIsValid(Utils.inputValue(inputValue, validation?.minLenght!))
        else if(type === 'email') return setIsValid(Utils.emailValidation(inputValue)) 
    }


    return (
        <>
            <div className="ui-input" data-name={name} data-error={!isValid ? 'Données incorrects' : ''} data-state={!isValid ? 'bad' : 'good'}>
                <label htmlFor={userId}><i className={icon}></i></label>
                <input type={type} placeholder={placeholder} id={userId} autoComplete="off" value={value} onChange={onChange}/> 
            </div>
        </>
    )

})

export default Input