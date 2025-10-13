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
    isValid : boolean,
    validate: () => boolean
}

const Input = forwardRef<InputRef,InputProps>(({type, name, placeholder, icon, validation}, ref) =>{

    const [value, setValue] = useState('')
    const [isValid, setIsValid] = useState<boolean>(true)
    const userId = useId()

    const validateInput = (inputValue: string): boolean => {
        let valid = true;
        if (type === 'text') {
            valid = Utils.inputValue(inputValue, validation?.minLenght || 3);
            setIsValid(valid);
        } else if (type === 'email') {
            valid = Utils.emailValidation(inputValue);
            setIsValid(valid);
        }
        
        return valid;
    }

    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value
        setValue(inputValue)
        validateInput(inputValue)
    }

    const validateCurrentValue  = ():boolean => {
        return validateInput(value)
    } 

    useImperativeHandle(ref, () => ({
        isValid,
        validate: validateCurrentValue 
    }),[isValid, value])

    return (
        <>
            <div className="ui-input" data-name={name} data-error={!isValid ? 'Données incorrects' : ''} data-state={!isValid ? 'bad' : 'good'}>
                <label htmlFor={userId}><i className={icon}></i></label>
                <input type={type} placeholder={placeholder} id={userId} autoComplete="off" value={value} onChange={onChange}/> 
                {type === 'password' && (<button type="button" data-active="">
                                        <i className="fa-solid fa-eye"></i>
                                        <i className="fa-solid fa-eye-slash"></i>
                                    </button>)}
            </div>
        </>
    )

})

export default Input