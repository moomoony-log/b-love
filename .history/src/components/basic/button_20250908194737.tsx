// --> BUTTON COMPONENTS

import { forwardRef } from "react"

interface buttonProps {
    type: 'submit' | 'button',
    name?: string,
    icon:string,
    size: string,
    color?: string,
    outline?: string,
    navigate?: string,
    inner?:string,
    onclick: () => unknown
}

const Button = forwardRef<HTMLButtonElement, buttonProps>(
  ({ name, icon, size, color, outline, navigate, inner, onclick }, ref) => {
    return (
      <button
        ref={ref} // 👉 la ref est attachée ici
        type="button"
        className="ui-btn"
        name={name}
        data-size={size}
        color={color}
        {...(outline ? { "data-outline": "" } : {})}
        {...(navigate ? { "data-navigate": "" } : {})}
        {...(inner ? { "data-inner": "" } : {})}
        onClick={onclick}
      >
        {name} {icon && <i className={icon}></i>}
      </button>
    );
  }
);

export default Button