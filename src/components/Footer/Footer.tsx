import { AiFillHeart } from "react-icons/ai";
import LinkText from "../Links/LinksText";
import { FooterBox, Text } from "./footer_styles";

const Footer = () => {
  return (
    <FooterBox>
      <Text>from</Text>
      <LinkText path="https://binary-studio.com" text="binary studio" />
      <Text>with</Text>
      <AiFillHeart />
    </FooterBox>
  );
};

export default Footer;
