import {
   LoaderBox,
   LoaderStyle,
} from './loader_styles';

export const Loader = () => {
   return (
      <LoaderBox data-test-id="loader">
         <LoaderStyle />
      </LoaderBox>
   );
};
