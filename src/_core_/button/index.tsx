import React from 'react';
import { ButtonCoreStyled, IButtonCoreStyled } from './ButtonCore.styled';

//Para propagar con sus elementos hijo
export interface IButtonCore extends IButtonCoreStyled { 
  iconLeft?: React.ReactElement;
  iconRight?: React.ReactElement;
};

const ButtonCore: React.FC<IButtonCore> = (props) => {

  const { className, children, iconLeft, iconRight, ...rest } = props;

  return (
    <ButtonCoreStyled className={`ButtonCore_Canvas ${className}`}
      // {...{ rest }}
      //clase:
      {...{ props: rest }}
    >
      <span 
        className='span_butonCore'
        style={{marginRight: '.5rem'}}
      >{iconLeft? iconLeft : null}</span>

      {children}

      <span 
        className='span_butonCore'
        style={{marginLeft: '.5rem'}}
      >{iconRight? iconRight : null}</span>
    </ButtonCoreStyled>
  );
};

export default ButtonCore;