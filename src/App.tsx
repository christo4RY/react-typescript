import Counter from "./components/Counter"
import { CountContextProvider } from "./contexts/countContext"

const App = () => {
  return (
      <CountContextProvider>
        <Counter chil={(count)=><h1>Count is {count}</h1>}/>
      </CountContextProvider>
  )
}

export default App
