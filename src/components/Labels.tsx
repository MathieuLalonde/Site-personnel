import { Link } from 'react-router-dom';
import './Labels.css'

interface Props {
  children: string[];
}

const Labels = ({ children }: Props) => {
  return (
    <div className='labels'>
      {children.length && children.map((label, i) => {
        return (
          // p.s. using i as the key is considered bad practice.
          <span key={i}>
            <Link to={`/blog?label=${label}`}>
              <span className={`label label_${label}`}># {label}</span>
            </Link>
          </span>
        )
      })
      }
    </div>
  )
}

export default Labels