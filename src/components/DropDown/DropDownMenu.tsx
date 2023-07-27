import { ReactElement, useState } from "react"

import { DropDownBox } from "./dropdownMenu_styles"

export const DropDownMenu = ({button, menu}: {button:ReactElement, menu: ReactElement}): ReactElement => {
    const [isOpen, setIsOpen] = useState(false)
    const onEnter = () => setIsOpen(true)
    const onLeave = () => setIsOpen(false)
    return (<DropDownBox onMouseEnter={onEnter} onMouseLeave={onLeave}>
        {button}
        {isOpen && menu}
    </DropDownBox>)
}
