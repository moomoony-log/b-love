// --> BUTTON COMPONENTS

import { forwardRef } from "react"

type buttonProps {
    type: 'submit' | 'button',
    name?: string,
    icon?:string,
    size: string,
    color?: string,
    outline?: string,
    small?: string,
    border?: string,
    navigate?: string,
    inner?:string,
    disable?:boolean,
    onclick?: () => unknown
}

const Button = forwardRef<HTMLButtonElement, buttonProps>(
  ({ name, icon, size, color, outline, small, navigate, inner, disable, border,onclick }, ref) => {
    return (
      <button
        ref={ref} 
        type="button"
        className="ui-btn"
        name={name}
        data-size={size}
        color={color}
        {...(outline ? { "data-outline": "" } : {})}
        {...(border ? { "data-border": "" } : {})}
        {...(disable ? { disabled: true } : {})}
        {...(navigate ? { "data-navigate": "" } : {})}
        {...(inner ? { "data-inner": "" } : {})}
        {...(small ? { "data-small": "" } : {})}
        {...(onclick ? { "data-active": "" } : {})}
        onClick={onclick}
      >
        {name} {icon && <i className={icon}></i>}
      </button>
    );
  }
);

export default Button