// --> BUTTON COMPONENTS

import { forwardRef } from "react"
import { NavLink } from "react-router-dom";

interface buttonProps {
    type: 'submit' | 'button',
    name?: string,
    icon?:string,
    size: string,
    color?: string,
    outline?: string,
    small?: string,
    navigate?: string,
    children: boolean,
    border?: boolean,
    to: string | false,
    inner?:string,
    disable?:boolean,
    onclick?: () => unknown
}

const Button = forwardRef<HTMLButtonElement, buttonProps>(
  ({ name, icon, size, color, outline, small, navigate, inner, disable, children,border, to, onclick }, ref) => {
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
        {...(border ? { "data-border": "" } : {})}
        {...(to && window.location.pathname === to ? { "data-active": "" } : {})}
        onClick={onclick}
      >
        { (!children && !to ) && name } { icon && <i className={icon }></i>}

        { (children && to) && <NavLink to={to}>{ name}</NavLink> }
        
      </button>
    );
  }
);

export default Button