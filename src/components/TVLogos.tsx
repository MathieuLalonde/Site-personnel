
import Ami from '../assets/logos/AMI TV.svg'
import AppleTV from '../assets/logos/Apple_TV.svg'
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
import ONF from '../assets/logos/ONF.svg'
import Paramount from '../assets/logos/Paramount_Plus.svg'
import Src from '../assets/logos/SRC-TV.svg'
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
      <img src={Ami} alt="AMI TV" />
      <img src={AppleTV} alt="Apple TV" />
      <img src={Bravo} alt="Bravo" />
      <img src={CBC} alt="CBC" style={{ padding: '0.15rem' }} />
      <img src={CanalD} alt="Canal D" />
      <img src={CanalVie} alt="Canal Vie" />
      <img src={HGTV} alt="HGTV" />
      <img src={Historia} alt="Historia" />
      <img src={History} alt="History Television" />
      <img src={LPB} alt="LPB/PBS" />
      <img src={RDI} alt="ici RDI" />
      <img src={Life} alt="Life" />
      <img src={Lifetime} alt="Lifetime" />
      <img src={MusiMax} alt="Musimax" />
      <img src={Nick} alt="Nickelodeon" style={{ padding: '0.4rem' }} />
      <img src={ONF} alt="ONF/NFB" />
      <img src={Paramount} alt="Paramount+" />
      <img src={Src} alt="SRC" />
      <img src={TeleQuebec} alt="Télé-Québec" />
      <img src={TFO} alt="TFO" />
      <img src={TV5} alt="TV5" style={{ padding: '0.15rem' }} />
      <img src={Tv5Monde} alt="TV5 Monde" />
      <img src={TVA} alt="TVA" style={{ padding: '0.1rem' }} />
      <img src={TVOntario} alt="TVOntario" />
      <img src={YTV} alt="YTV" />
    </div>
  )
}

export default TVLogos