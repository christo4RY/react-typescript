import { ChangeEvent, ReactElement, createContext, useCallback, useReducer } from "react"

type countType = {
    count:number,
    text:string
}

const enum REDUCER_ACTION_TYPE {
    INCREASE,
    DECREASE,
    TEXT_INPUT
}

const initalState :countType = {
    count:0,
    text:''
}

type reducerAction = {
    type:REDUCER_ACTION_TYPE,
    payload?:string
}

const reducer = (state:countType,action:reducerAction) : countType => {
    switch (action.type) {
        case REDUCER_ACTION_TYPE.INCREASE:
            return {...state,count:state.count + 1}
        case REDUCER_ACTION_TYPE.DECREASE:
            return {...state,count:state.count -1}
        case REDUCER_ACTION_TYPE.TEXT_INPUT:
            return {...state,text:action.payload??''}
        default:
            throw new Error()
    }
}

export const useCountContext = (initalState:countType) => {
    const [state,dispatch] = useReducer(reducer,initalState)
    const increase = useCallback(()=> dispatch({type:REDUCER_ACTION_TYPE.INCREASE}),[])
    const decrease = useCallback(()=> dispatch({type:REDUCER_ACTION_TYPE.DECREASE}),[])
    const textinput = useCallback((e: ChangeEvent<HTMLInputElement>)=> dispatch({type:REDUCER_ACTION_TYPE.TEXT_INPUT,payload:e.target.value}),[])
    return {state,increase,decrease,textinput}
}

type UseCountContextType = ReturnType<typeof useCountContext>

const initalContextState : UseCountContextType = {
    state: initalState,
    increase: () => {},
    decrease: () => {},
    textinput: () => { },
}

export const CountContext = createContext<UseCountContextType>(initalContextState)


type childrenProps = {
    children: ReactElement | ReactElement[] | null
}

export const CountContextProvider = ({children}:childrenProps) : ReactElement => {
    return (
        <CountContext.Provider value={useCountContext(initalState)}>
            {children}
        </CountContext.Provider>
    )
}

