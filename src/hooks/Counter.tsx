import { ChangeEvent, useContext } from "react"
import { CountContext } from "../contexts/countContext"

type CounterType = {
    count:number,
    increase:()=>  void,
    decrease:()=> void
}
export const useCounter = () : CounterType => {
    const {state:{count},increase,decrease} = useContext(CountContext)
    return {count,increase,decrease}
}


type TextType = {
    text:string,
    textinput:(e: ChangeEvent<HTMLInputElement>) => void
}

export const useText = () : TextType => {
    const {state:{text},textinput} = useContext(CountContext)
    return {text,textinput}
}