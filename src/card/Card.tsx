import { IconContainerCore } from '../components';
import { InputStyled } from '../components/Input/Input.styled';
import './cardSeb.css';

export const CardSeb = (props:any) => {
  const {data} = props;
  return (
    <>
      {
        data.map((item:any)=>(
        <div className='cardSeb' >
          <div className="cardSeb_img">
            <IconContainerCore bgColor={item.bg_color} iconImg={<item.icono />} />
          </div>
          <div className="cardSeb_input">
            <p className='cardSeb_p'>{item.label} <span> i </span> </p>
            <InputStyled  variant={item.variant} sizeInput={item.sizeInput} />
          </div>
        </div>
        ))
      }
    </>
  );
};
