import Logo from "./Logo"
import LinkIcon from "../Links/LinkIcon"
import DropDownMenu from "../DropDown/DropDownMenu"
import ButtonIcon from "../Button/ButtonIcon"
import Menu from "../DropDown/Menu"

const Header = () => {
    return (<div>
        <Logo />
        <LinkIcon path="/booking" icon={}/>
        <DropDownMenu button={<ButtonIcon icon={} onClick={()=>{}}/>} menu={<Menu/>}/>
    </div>)
}

export default Header