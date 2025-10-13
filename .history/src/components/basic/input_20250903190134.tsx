type InputProps{
    id: string,
    type : 'text' | 'email' | 'password' | 'select',
    placeholder: string,
    icon: string,
    contraint : {
        lenght : number,

    },
    onChange?: () => {  }
}


function Input({id, type,placeholder, icon, onChange}: InputProps) {

    return (
        <>
            <div className="ui-input"  data-name={type} data-error="Données incorrect" data-state="bad">
                <label htmlFor={id}><i className={icon}></i></label>
                <input type={type} placeholder={placeholder} id={id} autoComplete="off"/> 
            </div>
        </>
    )



}

export default Input