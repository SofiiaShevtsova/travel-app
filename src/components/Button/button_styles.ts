import styled from "styled-components";

export const ButtonBox = styled.button`
    color: inherit;
    background-color: transparent;

    fill: inherit;
    stroke: inherit;

    heigth: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border: none;
    transition: ${p=>p.theme.transitions.main};

    & svg {
        transition: ${p => p.theme.transitions.main};
    }

    &:hover{
        text-shadow: ${p=>p.theme.colors.hover} 1px 0 10px;
    }

    &:hover svg{
        transform: scale(1.2);
    }
`;

