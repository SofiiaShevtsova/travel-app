import { ReactElement } from "react";
import { LinkBox } from "./link_styles";

export const LinkText = ({
  text,
  path,
  dataAtribute,
}: {
  text: string;
  path: string;
  dataAtribute?: string;
}): ReactElement => {
    return (
        <LinkBox to={path} data-test-id={dataAtribute}>
            {text}
        </LinkBox>  
    )
}
