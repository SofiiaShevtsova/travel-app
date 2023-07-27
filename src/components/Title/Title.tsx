import { ReactElement } from "react";
import { TitleStyled } from "./title_styles";

const Title = ({ title, dataAtribute }: { title: string, dataAtribute?: string; }): ReactElement => {
  return <TitleStyled data-test-id={dataAtribute}>{title}</TitleStyled>;
};

export default Title;
