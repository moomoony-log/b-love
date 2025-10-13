// --> BUTTON COMPONENTS

import { forwardRef, useEffect, useRef, useState, type ReactNode } from "react"

interface buttonProps {
    type: 'submit' | 'button',
    name?: string,
    children?: ReactNode
    icon?:string,
    size: string,
    color?: string,
    outline?: string,
    small?: string,
    navigate?: string,
    inner?:string,
    disable?:boolean,
    onclick?: () => unknown
}



const Button =  ({ name, icon, size, color, outline, small, navigate, inner, disable, children, onclick }:buttonProps ) => {

    const [active, setActive] =useState<boolean>(false)

    const handleClick = (e:React.MouseEvent<HTMLButtonElement>) => {
      const current = e.currentTarget 
      onclick?.()
    }

    useEffect(() => {
      const btnCurrent = useRef<HTMLButtonElement>(null)
      console.log(btnCurrent.current?.parentElement)
      
       
    })

    return (
      <button  
        type="button"
        className="ui-btn"
        name={name}
        data-size={size}
        color={color}
        {...(outline ? { "data-outline": "" } : {})}
        {...(disable ? { disabled: true } : {})}
        {...(navigate ? { "data-navigate": "" } : {})}
        {...(inner ? { "data-inner": "" } : {})}
        {...(small ? { "data-small": "" } : {})}
        onClick={handleClick}
      >
        {name} {icon && <i className={icon}></i>} 
        {children}
      </button>
    );
  }

export default Button