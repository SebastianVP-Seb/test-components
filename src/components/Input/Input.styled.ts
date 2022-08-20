import styled, { css } from "styled-components";
import { IInputCore, InputCore } from "../../_core_/input/index";

type variant = '' | 'primary' | 'secondary' | 'danger' | 'success';
type appearance = '' | 'fill' | 'outline';
type sizeInput = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface IInputStyled extends IInputCore {
    variant?: variant;
    appearance?: appearance;
    sizeInput?: sizeInput;
};

export const InputStyled = styled(InputCore) <IInputStyled>`
    
    ${({ variant }) => {
        switch (variant) {
            case 'primary':
                return css`
                    border: 2px solid transparent;
                    outline: none;

                    &:focus {
                        border: 2px solid #2C537F
                    }
                `;
            case 'secondary':
                return css`
                    border: 2px solid transparent;
                    outline: none;

                    &:focus {
                        border: 2px solid #00B5E5
                    }
                `;
            case "success":
                return css`
                    outline: none;
                    border: 2px solid transparent;

                    &:focus {
                        border: 2px solid #00BE63
                    }
                `
            case "danger":
                return css`
                    outline: none;
                    border: 2px solid transparent;

                    &:focus {
                        border: 2px solid #E50000
                    }
                `
        }
    }}
    ${({ sizeInput }) => {

        switch (sizeInput) {
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