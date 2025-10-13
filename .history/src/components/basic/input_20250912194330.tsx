import React, { forwardRef, useId, useImperativeHandle, useState } from "react"
import Utils from "../../utils/utils"
import 'react-phone-number-input/style.css'
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input'

type ErrorInputValue = {
  text: "Vérifier la longueur"
  email: "Email invalide"
  password: "Min, maj, chiffre et 8 caractères"
  date: "Date invalide"
  phone: "Numéro incorrect"
  checkBox: "Accepter les règles",
  otp:"underfined"
}

const errorMessages: ErrorInputValue = {
  text: "Vérifier la longueur",
  email: "Email invalide",
  password: "Min, maj, chiffre et 8 caractères",
  date: "Date invalide",
  phone: "Numéro incorrect",
  checkBox: "Accepter les règles",
  otp:"underfined"
}

type InputProps = {
    type : keyof ErrorInputValue,
    name?: string,
    placeholder?: string,
    icon?: string,
    check?: boolean,
    disable?: boolean,
    onChangeCheckBox?: (e:React.ChangeEvent<HTMLInputElement>)=> boolean,
    validation?: {
        minLenght?: number
    }
    
}

export type InputRef = {
    isValid : boolean,
    validate: () => boolean
}

const Input = forwardRef<InputRef,InputProps>(({type, name, placeholder, icon, onChangeCheckBox, check, disable, validation}, ref) =>{
	
    const [phoneValue, setPhoneValue] = useState<string | undefined>()
    const [value, setValue] = useState('')
    const [isValid, setIsValid] = useState<boolean>(true)
    const [error, setError] = useState<string | null>()
    const userId = useId()

    const validateInput = (inputValue: string): boolean => {
 
        let valid = true;
        if (type === 'text') {
            valid = Utils.inputValue(inputValue, validation?.minLenght || 3);
            setIsValid(valid);
        } else if (type === 'email') {
            valid = Utils.emailValidation(inputValue);
            setIsValid(valid);
        }else if(type === 'password') {
            valid = Utils.passwordValidation(inputValue)
            setIsValid(valid)
        }else if(type === 'otp') {
            valid = Utils.otpValidation(inputValue)
            setIsValid(valid)
        }
        return valid;
    }

    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value
        setValue(inputValue)
        validateInput(inputValue)
    }

    const otpChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        onChange(e)
        if (e.target.value.length === 1) {
            // récupérer le prochain input frère (dans le DOM)
            const next = (e.target.parentElement?.nextElementSibling as HTMLElement)?.querySelector("input");
            if (next) next.focus();
        }
    }

    const handleBlur = () => {
        if(phoneValue && !isValidPhoneNumber(phoneValue)){
            setError("Number invalid")
            setIsValid(false)
        }else {
            setError(null)
            setIsValid(true)
        }
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
        {
        
        type === "text"  || type === "password" || type === "email" || type === "date"  ? 
            <div className="ui-input" data-name={name} data-error={!isValid ? errorMessages[type]: ''} data-state={!isValid ? 'bad' : 'good'}>
                <label htmlFor={userId}><i className={icon}></i></label>
                <input type={type} placeholder={placeholder} id={userId} autoComplete="off" value={value} onChange={onChange}/> 
                {type === 'password' && (<button type="button" data-active="">
                                        <i className="fa-solid fa-eye"></i>
                                        <i className="fa-solid fa-eye-slash"></i>
                                    </button>)}
            </div> : type === "phone" ?
            <div className="ui-input" {...(error ? { "data-error": errorMessages[type]} : {})} {...(error ? { "data-state": 'bad'} : {})}>
                <PhoneInput
                    placeholder={placeholder}
                    value={phoneValue}
                    onChange={setPhoneValue}
                    defaultCountry="CI"
                    onBlur={handleBlur}
                />
            </div> : type === "checkBox" ?  
            <div className="chekbox">
                <input type={type} id={userId} autoComplete="off"  onChange={onChangeCheckBox}  {...(check ? {checked : true}: {})}/> 
                <label htmlFor={userId}><i className={icon}></i> Accepter les conditions d'utilisation et la politique de confidentialité </label>
            </div> : type === "otp" ? 
            <div className="otp-input"> <input  type="text" value={value} onChange={otpChange} {...(disable ? {disabled: true}: {})} maxLength={1} placeholder=""  autoComplete="off" /> </div> : ""
        }
        </>
    )

})

export default Input