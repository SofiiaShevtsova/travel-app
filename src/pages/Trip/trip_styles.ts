import { styled } from "styled-components";

export const TripBox = styled.div`
  flex:1;
  padding: 60px 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px 50px;
  width: 100%;
  max-width: ${(p) => p.theme.widthContainer};
  margin: 0 auto;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 500px;
  height: 400px;
  object-fit: cover;
  margin: 0 auto;
`;

export const TripContent = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex: 1 1 400px;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  padding-top: 20px;
  margin: 0 auto;
  
  & button{
    max-width: 200px;
  }

  & p{
    opacity: 0.7;
  }
  `;
