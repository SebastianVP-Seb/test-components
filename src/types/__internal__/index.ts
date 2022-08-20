type color = { //será obligatorio
    primary: 'primary',
    secondary: 'secondary',
    info: 'info',
    success: 'success',
    error: 'error'
};

type size = {
    xs: 'xs',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl',
};

type variant = {
    fill: 'fill',
    outline: 'outline',
    link: 'link',
    linkUnderline: 'linkUnderline'
}

export interface IButtonStyleCore 
    extends 
//de las propiedades que hereda al hacer extends, omite el color, porque nosotros tenemos una
//prop que se llama igual.
//Marca un error diciendo que la propiedad "color" es incompatible
    Omit<
    React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
    'color'>
{
    color?: color;
    size?: size;
    variant?: variant;
};