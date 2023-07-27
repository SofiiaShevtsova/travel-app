import styled from "styled-components";

export const ModalBox = styled.div`
  position: fixed;
  inset: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  background-color: ${p => p.theme.colors.overlayColor};
  `;

export const ContectBox = styled.div`
  position: relative;
  min-width: 300px;
  background-color: ${p => p.theme.colors.white};
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap:10px;

  &>button{
  position: absolute;
  height: 20px;
  top:10px;
  right: 10px;
  }
`;

export const Total = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 5px;
  padding-top: 15px;
  border-top: 1px solid ${p => p.theme.colors.gray};

  &>*{
  font-weight: 600;
  font-size: ${p=>p.theme.fonts.size400};
  }
  `;
