import { ReactElement } from "react"
import { TextStyle } from "./text_styles"

const Text = ({ text, children }: { text: string, children?: ReactElement }):ReactElement => {
    return (<TextStyle>
        {text}
        {children}
      </TextStyle>
)
}

export default Text