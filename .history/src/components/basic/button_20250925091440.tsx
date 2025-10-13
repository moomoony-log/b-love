// --> BUTTON COMPONENTS

import { forwardRef, type ReactNode } from "react"

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

const Button = forwardRef<HTMLButtonElement, buttonProps>(
  ({ name, icon, size, color, outline, small, navigate, inner, disable, children, onclick }, ref) => {

    const handleClick = (e:React.MouseEvent<HTMLButtonElement>) => {
      e.currentTarget.setAttribute('data-active','')
      onclick?.()
    }





    return (
      <button
        ref={ref} 
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
);

export default Button