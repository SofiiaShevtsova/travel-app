import { ReactElement, useState } from "react"

const DropDownMenu = ({button, menu}: {button:ReactElement, menu: ReactElement}) => {
    const [isOpen, setIsOpen] = useState(false)
    const onClick = () => setIsOpen(!isOpen)
    return (<div onClick={onClick}>
        {button}
        {isOpen && menu}
    </div>)
}

export default DropDownMenu