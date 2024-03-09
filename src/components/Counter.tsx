import { KeyboardEvent, ReactNode, useReducer, useState } from "react"

const initalState = {
  count:0,
  text:null
}
const enum REDUCER_ACION_TYPE {
      INCREASE,
      DECREASE,
      TEXT_INPUT
}
type Chilprops = {
  chil:(count:number)=>ReactNode
}

type reducerAction = {
  type:REDUCER_ACION_TYPE,
  payload?:string
}

const reducer = (state:typeof initalState,action:reducerAction) : typeof initalState => {
  switch (action.type) {
    case REDUCER_ACION_TYPE.INCREASE:
      return {...state,count:state.count + 1}
    case REDUCER_ACION_TYPE.DECREASE:
      return {...state,count:state.count - 1}
    case REDUCER_ACION_TYPE.TEXT_INPUT:
      return {...state,text:action.payload??''}
    default:
      throw new Error()
  }
}

const Counter = ({chil}:Chilprops) => {
  const [state,dispatch] = useReducer(reducer,initalState)
  return (
    <div>
      {chil(state.count)}
      <div>
        <button onClick={()=>dispatch({type:REDUCER_ACION_TYPE.INCREASE})}>Increase</button>
        <button onClick={()=>dispatch({type:REDUCER_ACION_TYPE.DECREASE})}>Decrease</button>
        <input type="text" onChange={(e: KeyboardEvent<HTMLInputElement>)=>dispatch({type:REDUCER_ACION_TYPE.TEXT_INPUT,payload:e.target.value})}/>
        <h1>{state.text}</h1>
      </div>
    </div>
  )
}

export default Counter
