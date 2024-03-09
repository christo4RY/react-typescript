import { KeyboardEvent, MouseEvent } from "react"

type ButtonProps = {
    add:(e: MouseEvent<HTMLButtonElement>|KeyboardEvent<HTMLButtonElement>) => void
}
const Button = ({add}:ButtonProps) => {
  return (
    <div>
      <button onClick={add}>Click</button>
    </div>
  )
}

export default Button
