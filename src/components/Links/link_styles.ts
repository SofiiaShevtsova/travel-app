import styled from "styled-components";
import { Link } from 'react-router-dom'


export const LinkBox = styled(Link)`
    text-decoration: none;
    color: inherit;

    fill: inherit;
    stroke: inherit;

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    transition: ${p => p.theme.transitions.main};
    
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

