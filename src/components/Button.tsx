interface Props {
  children: string;
  color?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'info' | 'light' | 'dark';
  onClick: () => void;
}

export const Button = ({ children, onClick, color = 'primary' }: Props) => {
  return (
    <button color={color} className={'btn btn-' + color} onClick={onClick}>{children}</button>
  )
}



export default Button