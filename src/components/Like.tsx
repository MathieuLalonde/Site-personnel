import { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa6"

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(false);

  const toggle = () => { 
    setStatus(!status);
    onClick();
  }

  if (status)
    return <FaHeart color="#ff6b81" size="25" onClick={toggle} />;
  else
    return <FaRegHeart color="black" size="25" onClick={toggle} />;
    
}

export default Like;