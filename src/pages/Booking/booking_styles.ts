import styled from "styled-components";

export const BookingBox = styled.ul`
  flex:1;
  padding:30px 0 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

export const BookingItem = styled.li`
 position: relative;
  display: flex;
  flex-wrap: wrap;
  gap: 10px 40px;
  width: 100%;
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
`;

export const BookingTitle = styled.h3`
width: 100%;
  font-weight: 600;
  font-size: ${p=>p.theme.fonts.size400};
  font-family: ${p=>p.theme.fonts.logo};
  line-height: 1;
`;

export const TotalPrice = styled.span`
  color: ${p=>p.theme.colors.blue200};
  font-size: ${p=>p.theme.fonts.size400};
  line-height: 1;
  margin-left: auto;
`;