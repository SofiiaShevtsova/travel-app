import { ReactElement } from "react"
import { ContainerStyle } from "./container_styles"

const Container = ({children}:{children:ReactElement}) => {
    return (<ContainerStyle>{ children}</ContainerStyle>)
}

export default Container