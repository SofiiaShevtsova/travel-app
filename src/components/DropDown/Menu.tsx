import { useAppDispatch } from '../../redux/store';
import { MenuBox } from './dropdownMenu_styles';
import { ButtonText } from '../commons';
import { User } from '../../commons/types';
import { logOut } from '../../redux/auth/authOperations';

const Menu = ({ user }: { user: User }) => {
   const dispatcher = useAppDispatch();

   const onLogOutClick = () => {
      dispatcher(logOut());
   };

   return (
      <MenuBox data-test-id="header-profile-nav-list">
         <p data-test-id="header-profile-nav-username">
            {user.fullName}
         </p>
         <ButtonText
            text={'Sign out'}
            type="button"
            onClick={onLogOutClick}
         />
      </MenuBox>
   );
};

export default Menu;
