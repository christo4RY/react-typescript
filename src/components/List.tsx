import { ReactNode } from "react";

type ListProps<T> = {
  items: T[];
  callback: (item: T) => ReactNode;
};

const List = <T,>({ items, callback }: ListProps<T>) => {
  return <div>{items.map((item) => callback(item))}</div>;
};

export default List;
