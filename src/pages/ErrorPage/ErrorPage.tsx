import {
   Title,
   LinkText,
   Text,
} from '../../components/commons';
import { ErrorPageBox } from './error_styles';

const ErrorPage = () => {
   return (
      <ErrorPageBox>
         <Title title={'Error page'} />
         <Text
            text={
               'Sorry, but the site is undergoing additional work. Viewing the site is currently unavailable. An analogue of the site, but without all the functionality, can be seen by following the link.'
            }
         />
         <LinkText
            path="https://illustrious-cuchufli-3a8be9.netlify.app/"
            text={'Link to site'}
         />
      </ErrorPageBox>
   );
};

export default ErrorPage;
