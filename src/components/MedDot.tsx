import Dot from '../assets/dot.svg'

interface Props {
  className?: string;
  size?: string;
}

const MedDot = ({ className, size='2%' }: Props) => {
  return (
    <img src={Dot} width={`${size}`} height={`${size}`} className={`meddot ${className}`} style={{ margin: '4rem auto' }} />
  )
}

export default MedDot