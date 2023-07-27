import styled from "styled-components";

export const TripInfo = styled.div`
  width: 100%;
  max-width: 300px;
  padding-bottom: 10px;
  border-bottom: 1px solid ${p=>p.theme.colors.gray};

  &>h3{
  font-weight: 600;
  font-size: ${p=>p.theme.fonts.size400};
  font-family: 'Playfair Display', serif;
  }
  `;

export const TripContent = styled.div`
  display: flex;
  font-weight: 300;
  margin-top: 5px;
`;

export const Duration = styled.span`
  min-width: 120px;
  display: flex;
  gap:5px;
`;

export const Level = styled.span`
&::before {
  content: '•';
  margin-right: 10px;
  color: ${p=>p.theme.colors.blue200};
}
`;

