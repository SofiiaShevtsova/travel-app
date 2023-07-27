import { ReactElement } from "react"
import { TextStyle } from "./text_styles"

export const Text = ({ text, children }: { text: string, children?: ReactElement }):ReactElement => {
    return (<TextStyle>
        {text}
        {children}
      </TextStyle>
)
}
