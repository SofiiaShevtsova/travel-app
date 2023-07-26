import styled from "styled-components";

export const Error = styled.p`
    position: absolute;
    bottom: -20px;
    left: 10px;
    max-width: 300px;
    color: ${p=>p.theme.colors.error};

    font-family: ${(p) => p.theme.fonts.main};
    font-size: ${(p) => p.theme.fonts.size100};
`;
