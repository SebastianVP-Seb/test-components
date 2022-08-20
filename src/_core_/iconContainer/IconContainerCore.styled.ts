import styled from "styled-components";

export interface IIconContainerCoreStyled extends 
React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    bgColor: string;
};

export const IconContainerCoreStyled=styled.div<IIconContainerCoreStyled>`

    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props=>`#${props.bgColor}`};

    svg {
        width: 30px;
        height: 30px;
        fill: #2C537F;
    }
`;
