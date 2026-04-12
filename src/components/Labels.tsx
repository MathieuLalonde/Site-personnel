import { Link } from 'react-router-dom';

interface Props {
  children: string[]
}

function Labels({ children }: Props) {
  return (
    <div className="labels">
      {children.length && children.sort().map((label) => {
        return (
          <span key={label}>
            <Link to={`/blog?label=${label}`}>
              <span className={`label label_${label}`}>
                #
                {label}
              </span>
            </Link>
          </span>
        );
      })}
    </div>
  );
}

export default Labels;
