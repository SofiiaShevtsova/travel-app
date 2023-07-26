import styled from "styled-components";

export const FormBox = styled.form`
  max-width: 340px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;

  font-family: ${(p) => p.theme.fonts.main};
  font-size: ${(p) => p.theme.fonts.size200};
`;

export const FieldBox = styled.div`
   position: relative;
   width: 100%;    
`;

