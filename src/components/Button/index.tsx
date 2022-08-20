import React from 'react';
import { ButtonStyled, IButtonStyled } from './Button.styled';

interface IButton extends IButtonStyled {

};

export const Button: React.FC<IButtonStyled> = (props) => {
  //se desestructura de izquierda a derecha
  const {
    className,
    children,
    variant,
    appearance,
    size,
    iconRight,
    iconLeft,
    ...rest } = props;
  return (
    <ButtonStyled
      className={`Buton_Canvas ${className}`}
      {...{ props: rest }}
      variant={variant}
      appearance={appearance}
      size={size}
      iconRight={iconRight}
      iconLeft={iconLeft}
    >{children}</ButtonStyled>
  );
};
