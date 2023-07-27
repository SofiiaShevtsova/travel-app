import styled from "styled-components";

export const HeaderBox = styled.header`
position: fixed;
top: 0;
left: 0;
width: 100vw;
min-height: 80px;
display: flex;
align-items: center;
padding: 0 20px;
border-bottom: 1px solid ${p => p.theme.colors.gray};
color: ${p => p.theme.colors.blue400};
background-color: ${(p) => p.theme.colors.white};
font-size: ${p=>p.theme.fonts.size500};

&>div{
display: flex;
align-items: center;
justify-content: space-between;
}
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

