import styled from "styled-components";

export interface IInputCoreStyled extends 
    React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> { };

export const InputCoreStyled=styled.input<IInputCoreStyled>`
    width: 8rem;
    height: 1.7rem;
    padding: 0 .8rem;
    border-radius: 50px;
    background-color: #E5E5E5;
    outline: none;
    border: none;
    color: #5A5A5A;
    font-weight: bold;

    input::placeholder {
        color: hotpink;
    }

    :active {
        outline: hotpink;
    }

    :focus {
        outline: hotpink;
    }
    /* border: 2px solid white; */
    /* color: black; */
`;