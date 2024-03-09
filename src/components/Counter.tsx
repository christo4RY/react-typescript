import React, { ReactElement, ReactNode } from "react"

type CounterProps = {
    setCount:React.Dispatch<React.SetStateAction<number>>,
    children:ReactNode
}
const Counter = ({setCount,children} : CounterProps) : ReactElement => {
  return (
    <div>
        {children}
      <button onClick={()=> setCount(pre=> pre+1)}>create</button>
      <button onClick={()=> setCount(pre=> pre-1)}>delete</button>
    </div>
  )
}

export default Counter
