import ButtonCore, { IButtonCore } from "../../_core_/button/index";
import styled, { css } from 'styled-components';

type variant = '' | 'primary' | 'secondary' | 'success' | 'danger';
type appearance = '' | 'fill' | 'outline' | 'text' | 'linkUnderline';
type size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

//Lógica para definir variantes del botón
export interface IButtonStyled extends IButtonCore {
    variant?: variant;
    appearance?: appearance;
    size?: size;
};

let setColor: string;

//El elemento tsx, no los estilos ts
export const ButtonStyled = styled(ButtonCore) <IButtonStyled>`

${props => props.variant === 'primary' ? setColor = '#2C537F' :
        props.variant === 'secondary' ? setColor = '#00B5E5' :
            props.variant === 'success' ? setColor = '#00BE63' :
                props.variant === 'danger' ? setColor = '#E50000' : ''}


${({ variant }) => {
        switch (variant) {
            case "primary":
                return css`
                    background-color: #2C537F;
                `;

            case "secondary":
                return css`
                    background-color: #00B5E5;
                `;

            case "success":
                return css`
                    background-color: #00BE63;
                `;

            case "danger":
                return css`
                    background-color: #E50000;
                `;

            default:
                break;
        }
    }}

${({ appearance }) => {
        switch (appearance) {
            case "outline":
                return css`
                    background-color: unset;
                    color: ${setColor};
                    border: ${setColor} solid 2px;
                `;

            case "text":
                return css`
                    background-color: unset;
                    color: ${setColor};
                    text-decoration: ${setColor} solid 2px;
                `;
            case "fill":
                return css`
                background-color: ${setColor};
                `;
            case 'linkUnderline':
                return css`
                text-decoration: underline;
                color: ${setColor};
                background-color: unset;
                `;
        }
    }}

${({ size }) => {

        switch (size) {
            case "xs":
                return css`
            width: 1rem;
        `;
            case 'sm':
                return css`
            width: 7rem;
        `;
            case 'md':
                return css`
            width: 14rem;
        `;
            case 'lg':
                return css`
            width: 18rem;
        `;
            case 'xl':
                return css`
            width: 100%;
        `;
            default:
                break;
        }
    }}
`;