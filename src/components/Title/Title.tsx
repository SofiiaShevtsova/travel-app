import { ReactElement } from "react";
import { TitleStyled } from "./title_styles";

const Title = ({ title }: { title: string }): ReactElement => {
  return <TitleStyled >{title}</TitleStyled>;
};

export default Title;
