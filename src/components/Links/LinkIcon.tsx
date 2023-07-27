import { ReactElement } from "react";
import { LinkBox } from "./link_styles";

export const LinkIcon = ({
  icon,
  path,
  dataAtribute,
}: {
  icon: ReactElement;
  path: string;
  dataAtribute?: string;
}): ReactElement => {
  return (
    <LinkBox to={path} data-test-id={dataAtribute}>
      {icon}
    </LinkBox>
  );
};
