import Dot from '../assets/dot.svg'

interface Props {
  className?: string;
  size?: string;
}

const MedDot = ({ className, size='35rem' }: Props) => {
  return (
    <img src={Dot} width={`${size}`} height={`${size}`} className={`meddot ${className}`} style={{ margin: '4rem auto' }}
      aria-hidden="true"/>
  )
}

export default MedDot