import { styled } from "styled-components"

export const LoaderBox = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.3);
`;

export const LoaderStyle = styled.div`  
  width: 60px;
  height: 60px;
  border: 4px solid ${p=>p.theme.colors.blue200};
  border-top: 4px solid transparent;
  border-radius: 50%;
  animation: rotate 1.2s infinite linear;

  @keyframes rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
`;