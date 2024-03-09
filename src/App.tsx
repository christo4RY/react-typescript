import { useState } from "react"
import Counter from "./components/Counter"
import Header from "./components/Header"
import Section from "./components/Section"
import List from "./components/List"

const App = () => {
  const [count,setCount] = useState<number>(0)
  return (
    <div> 
      <Header title="Hey Guys"/>
      <Section title="Title 1">Hey 1</Section>
      <Counter setCount={setCount}>Count is {count}</Counter>
      <List items={['aung','mg','kaung']} callback={(item:string)=> <h1 key={item}>{item}</h1>}/>
    </div>
  )
}

export default App
