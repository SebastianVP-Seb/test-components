import styled from 'styled-components';

//extiende de React y de HTML
/*Necesario extender de React, para tener el comportamiento esperado
Entonces se tiene el button de React y el buton del HTML */
export interface IButtonCoreStyled extends 
React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {

    color?:string
 };



export const ButtonCoreStyled=styled.button<IButtonCoreStyled>`
    width: max-content;
    height: 2.6rem;
    border-radius: 50px;
    border: none;
    color: white;
    padding: 0rem 1rem;
    align-items: center;
    transition: all .5s;
    display: flex;
    justify-content: space-between;

    &:hover {
        cursor: pointer;
        /* transform: scale(1.1); */
        /* box-shadow: 0 .3rem .5rem rgba(0,0,0,.5); */
    }

    .span_butonCore svg {
        width: 1.4rem;
        height: 1.4rem;
        fill: #2C537F;
    }
`;
