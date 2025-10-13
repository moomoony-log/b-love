// --> BUTTON COMPONENTS

import { forwardRef } from "react"

interface buttonProps {
    type: 'submit' | 'button',
    name?: string,
    icon?:string,
    size: string,
    color?: string,
    outline?: string,
    small?: string,
    navigate?: string,
    inner?:string,
    disabled?:boolean,
    onclick: () => unknown
}

const Button = forwardRef<HTMLButtonElement, buttonProps>(
  ({ name, icon, size, color, outline, small, navigate, inner, disabled, onclick }, ref) => {
    return (
      <button
        ref={ref} 
        type="button"
        className="ui-btn"
        name={name}
        data-size={size}
        color={color}
        {...(outline ? { "data-outline": "" } : {})}
        {...(disabled ? { "disabled": "" } : {})}
        {...(navigate ? { "data-navigate": "" } : {})}
        {...(inner ? { "data-inner": "" } : {})}
        {...(small ? { "data-small": "" } : {})}
        onClick={onclick}
      >
        {name} {icon && <i className={icon}></i>}
      </button>
    );
  }
);

export default Button