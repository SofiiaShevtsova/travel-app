import styled from "styled-components";

export const BookingBox = styled.ul`
  height: 74vh;
  width: 100%;
  overflow: auto;
  padding:40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin: 0 auto;
`;

export const BookingItem = styled.li`
 position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  align-items: flex-end;
  justify-content: center;
  max-width: 800px;
  padding: 15px 25px;
  background-color: ${p=>p.theme.colors.blue100};
  border-left: 4px solid ${p=>p.theme.colors.blue200};
  border-radius: 1px;

  &>button{
position: absolute;
top: 10px;
right: 10px;
height: 20px;
  }

  & span{
    margin-right:20px;
  }
`;

export const BookingImage = styled.img`
  display: inline-block;
  width: 250px;
  height: 200px;
  object-fit: cover;
`;

export const BookingTitle = styled.h3`
  font-weight: 600;
  font-size: ${p=>p.theme.fonts.size400};
  font-family: ${p=>p.theme.fonts.logo};
  line-height: 1;
    margin-bottom: 20px;

`;

export const TotalPrice = styled.span`
  color: ${p=>p.theme.colors.blue200};
  font-size: ${p=>p.theme.fonts.size400};
  line-height: 1;
  margin-left: auto;
`;