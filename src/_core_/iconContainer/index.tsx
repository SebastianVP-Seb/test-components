import React from 'react';
import { IconContainerCoreStyled, IIconContainerCoreStyled } from './IconContainerCore.styled';

export interface IIconContainerCore extends IIconContainerCoreStyled {
    iconImg: React.ReactElement;
};

export const IconContainerCore: React.FC<IIconContainerCore> = (props) => {

    const {iconImg, bgColor} =props;

  return (
    <IconContainerCoreStyled bgColor={bgColor}>
        {iconImg}
    </IconContainerCoreStyled>
  );
};
