import React from 'react';
import { IInputStyled, InputStyled } from './Input.styled';

interface IInput extends IInputStyled { };

export const Input: React.FC<IInput> = (props) => {
  const {variant, appearance, sizeInput, ...rest} = props;
  return (
    <InputStyled 
      {...{props: rest}}
      variant={variant}
      appearance={appearance}
      sizeInput={sizeInput}
    />
  );
};
