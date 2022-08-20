import React from 'react';
import { IInputCoreStyled, InputCoreStyled } from './InputCore.styled';

export interface IInputCore extends IInputCoreStyled { 
  iconLeft?: React.ReactElement;
  iconRight?: React.ReactElement;
}; 

export const InputCore:React.FC<IInputCore> = (props) => {

  const { className,  iconLeft, iconRight,...rest} = props;
  // props.onChange
  // console.log(props)

  return (
    <InputCoreStyled className={`InputCore_Canvas ${className}`}
      {...{props: rest}}
    />
  );
};
