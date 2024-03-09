import Counter from "./components/Counter"


const App = () => {
  return (
    <div> 
    <Counter chil={(count)=><h1>Count is {count}</h1>}/>
    </div>
  )
}

export default App
