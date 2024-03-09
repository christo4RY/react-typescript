import {
  KeyboardEvent,
  MouseEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Button from "./Button";

interface User {
  id?: number;
  name?: string;
}

type fibFunc = (n: number) => number 

const fib: fibFunc = (n) => {
  if (n < 2) return n 
  return fib(n - 1) + fib(n - 2) 
}

const myNum: number = 37 
const Counter = () => {
  const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<User[] | null>(null);
    const inputRef = useRef<HTMLInputElement>(null)
    console.log(inputRef?.current)
    console.log(inputRef?.current?.value)
  useEffect(() => {
    console.log("mounted");
    console.log(`users ${users}`);
    console.log(inputRef?.current)
    return () => console.log("unmounted");
  }, []);

  const add = useCallback(
    (
      e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
    ): void => {
      setCount((pre) => pre + 1);
    },
    [count]
  );

  const result = useMemo<number>(()=>fib(myNum),[myNum])
  return (
    <div>
      <h1>{count}</h1>
      <Button add={add} />
      <h1>{result}</h1>
      <input type="text" ref={inputRef} />
      <h1></h1>
    </div>
  );
};

export default Counter;
