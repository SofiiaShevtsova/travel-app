import { ButtonIcon } from '../commons';
import {
   BsSunFill,
   BsMoonFill,
} from 'react-icons/bs';
import { ToggleThemeBox } from './toggle_styles';

export const ToggleTheme = ({
   currentTheme,
   setTheme,
}: any) => {
   const changeTheme = () => {
      const themeToSet =
         currentTheme === 'light'
            ? 'dark'
            : 'light';
      setTheme(themeToSet);
   };

   return (
      <ToggleThemeBox>
         <ButtonIcon
            icon={
               currentTheme === 'light' ? (
                  <BsMoonFill />
               ) : (
                  <BsSunFill />
               )
            }
            onClick={changeTheme}
         />
      </ToggleThemeBox>
   );
};

export default ToggleTheme;
