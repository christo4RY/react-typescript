import { ReactElement, ReactNode } from "react"

type SectionProps = {
    title?:string,
    children:ReactNode
}
const Section = ({children,title} : SectionProps) : ReactElement => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{children}</p>
    </div>
  )
}

export default Section
