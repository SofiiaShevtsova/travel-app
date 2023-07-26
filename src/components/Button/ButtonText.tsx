import { ReactElement } from "react"
import { ButtonTextBox } from "./button_styles"

const ButtonText = ({text, type}: {text:string, type: 'button'|'submit'}):ReactElement => {
    return (<ButtonTextBox type={type}>{text}</ButtonTextBox>)
}

export default ButtonText