import React from 'react';
import { CardSeb } from '../card/Card';
import { Button } from '../components';
// import { Input } from '../components/Input';
// import { InputStyled } from '../components/Input/Input.styled';
import { data, data1 } from '../db/db';
import { IFive } from '../icons/IFive';
import { IFour } from '../icons/IFour';
import { Ione } from '../icons/Ione';
import { ISix } from '../icons/ISix';
import './form1.css';

export const Form1: React.FC = () => {

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('holaaa');
    const dataForm = Object.fromEntries(new FormData(e.target));
    console.log(dataForm);
  };

  return (
    <div className='form1'>
      <form onSubmit={handleSubmit} >
        <h3>AsTecI S.A. de C.V.</h3>
        <div className='line'></div>
        <div className="container_cards">
          <CardSeb data={data} />
          <div className="container_buttons">
            <Button
              className='container_buttons--btn1'
              variant='secondary'
              appearance='outline'
              size='sm'
            >Cancelar</Button>

            <Button
              type='submit'
              variant='secondary'
              appearance='fill'>Guardar</Button>
          </div>
        </div>
      </form>
      <form>
        <h3>AsTecI S.A. de C.V.</h3>
        <div className='line'></div>
        <div className="container_cards">
          <CardSeb data={data1} />

          <div className="container_buttons-1">
            <Button appearance='fill' variant='danger' size='sm' iconLeft={<ISix />}>Button1</Button>
            <Button appearance='linkUnderline' variant='secondary' iconRight={<IFive />} >Button2</Button>
            <Button appearance='outline' iconRight={<IFour />} >Button3</Button>
            <Button size='xl' variant='success' appearance='fill'>Button4</Button>
            <Button>Button5</Button>
            <Button appearance='outline' iconLeft={<Ione />} variant='secondary'>Button6</Button>
          </div>
        </div>
      </form>
    </div>
  );
};
