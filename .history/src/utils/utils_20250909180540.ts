class Utils {
   
    static emailValidation(email: string) : boolean {
        const emailRegex :RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return emailRegex.test(email)
    }

    static inputValue(value: string, minLenght: number) : boolean {
        const inputRegex :RegExp = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/ 

        if (value.length > minLenght && inputRegex.test(value)) return inputRegex.test(value)
        else return false
    }

    static passwordValidation = (value: string):boolean => {
        const passwordRegex: RegExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/g
        if (passwordRegex.test(value)) return true
        else return false
    }

}

export default Utils