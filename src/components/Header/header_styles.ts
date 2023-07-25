import styled from "styled-components";

export const HeaderBox = styled.header`
position: fixed;
top: 0;
left: 0;
width: 100vw;
padding: 0 20px;
display: flex;
align-items: center;
justify-content: space-between;
color: ${p=>p.theme.colors.blue400};
font-size: ${p=>p.theme.fonts.size500};
border-bottom: 1px solid ${p=>p.theme.colors.gray};
`;

export const LogoBox = styled.div`
  color: ${p=>p.theme.colors.blue400};
  font-weight: 600;
  font-family: ${p =>p.theme.fonts.logo};
  `;

export const NavigationBox = styled.nav`
  display: flex;
  gap: 10px;
  `;

