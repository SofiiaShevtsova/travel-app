import { ReactElement, useState } from "react"

const DropDownMenu = ({button, menu}: {button:ReactElement, menu: ReactElement}) => {
    const [isOpen, setIsOpen] = useState(false)
    const onEnter = () => setIsOpen(true)
    const onLeave = () => setIsOpen(false)
    return (<div onMouseEnter={onEnter} onMouseLeave={onLeave}>
        {button}
        {isOpen && menu}
    </div>)
}

export default DropDownMenu