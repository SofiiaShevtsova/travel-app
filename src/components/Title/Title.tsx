import { ReactElement } from "react";
import { TitleStyled } from "./title_styles";

export const Title = ({ title, dataAtribute }: { title: string, dataAtribute?: string; }): ReactElement => {
  return <TitleStyled data-test-id={dataAtribute}>{title}</TitleStyled>;
};
