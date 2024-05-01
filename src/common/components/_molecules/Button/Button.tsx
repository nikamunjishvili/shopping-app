import { ButtonType } from "../../../types"

const Button = ({className,children}:ButtonType) => {
  return (
    <button className={className}>{children}</button>
  )
}

export default Button