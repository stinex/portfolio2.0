import Container from "@/app/components/container/Container"
import Header from "@/app/components/header/Header"
import { FC, PropsWithChildren } from "react"
import Meta from "./meta/Meta"
import { ISeo } from "./meta/meta.interface"

interface ILayout extends ISeo {}

const Layout: FC<PropsWithChildren<ILayout>> = ({ children, ...rest }) => {
  return (
    <>
      <Meta {...rest} />
      <Container>
        <Header />
      </Container>
      {children}
    </>
  )
}
export default Layout
