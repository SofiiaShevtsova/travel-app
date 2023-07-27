import { ReactElement } from "react"

import { ContainerStyle } from "./container_styles"

export const Container = ({children}:{children:ReactElement}) => {
    return (<ContainerStyle>{ children}</ContainerStyle>)
}
