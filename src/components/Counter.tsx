import { ReactNode } from "react"
import { useCounter, useText } from "../hooks/Counter"

type Counterprops = {
  chil:(count:number) => ReactNode
}
const Counter = ({chil}:Counterprops) => {
  const {count,increase,decrease} = useCounter()
  const {text,textinput} = useText()
  return (
    <div>
      {chil(count)}
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <input type="text" onChange={textinput} />
      <h1>{text}</h1>
    </div>
  )
}

export default Counter
