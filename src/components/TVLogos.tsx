import Src from '../assets/logos/SRC-TV.svg'
import Ami from '../assets/logos/AMI TV.svg'
// import Bbc from '../assets/logos/BBC_Logo_2021.svg'
import Bravo from '../assets/logos/Bravo_logo.svg'
// import Bravo2012 from '../assets/logos/Bravo_Canada_2012.svg'
import CBC from '../assets/logos/CBC_logo.svg'
import CanalD from '../assets/logos/CanalD.svg'
import CanalVie from '../assets/logos/CanalVie.svg'
import HGTV from '../assets/logos/HGTV_2010.svg'

import Historia from '../assets/logos/Historia_Logo_2015.svg'
import History from '../assets/logos/History_Logo.svg'
import RDI from '../assets/logos/ICI_RDI_logo.svg'
// import RDI2 from '../assets/logos/rdi.svg'

import LPB from '../assets/logos/LPB_PBS_logo.svg'
import Life from '../assets/logos/Life_Network.svg'
import Lifetime from '../assets/logos/Logo_Lifetime_2020.svg'
import MusiMax from '../assets/logos/MusiMax_logo.svg'
// import NHK from '../assets/logos/NHK_logo_2020.svg'
import Nick from '../assets/logos/Nickelodeon_2009_logo.svg'
// import Nick2023 from '../assets/logos/Nickelodeon_2023_logo_(outline).svg'
import TFO from '../assets/logos/TFO_2020_Logo.svg'
// import TFO97 from '../assets/logos/TFO_1997.svg'
import TV5 from '../assets/logos/TV5_(logo).svg'
import Tv5Monde from '../assets/logos/Logo_TV5_Monde_-_2021.svg'
import TVA from '../assets/logos/TVA_logo_2020.svg'
import TeleQuebec from '../assets/logos/Tele-Quebec_logo.svg'
import TVOntario from '../assets/logos/TVOntario_2022.svg'
import YTV from '../assets/logos/YTV_logo_2009.svg'



const TVLogos = () => {
  return (
    <div className='tvlogos'>
      <img src={Ami} />
      <img src={Bravo}  />
      <img src={CBC} style={{ padding: '0.15rem' }} />
      <img src={CanalD} />
      <img src={CanalVie} />
      <img src={HGTV} />
      <img src={Historia} />
      <img src={History} />
      <img src={LPB} />
      <img src={RDI} />
      <img src={Life} />
      <img src={Lifetime} />
      <img src={MusiMax} />
      <img src={Nick} style={{ padding: '0.4rem' }} />
      <img src={Src} />
      <img src={TeleQuebec} />
      <img src={TFO} />
      <img src={TV5} style={{ padding: '0.15rem' }} />
      <img src={Tv5Monde} />
      <img src={TVA} style={{ padding: '0.1rem' }} />
      <img src={TVOntario} />
      <img src={YTV} />
    </div>
  )
}

export default TVLogos