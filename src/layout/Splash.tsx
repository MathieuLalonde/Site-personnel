import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import Footer from './Footer';
import NavBar from './NavBar';

const SPLASH_WORDS = ['Créer. ', 'Coder. ', 'Collaborer. ', 'Communiquer. ', 'Captiver. ', 'Concevoir. '] as const;

function Splash() {
  const [count, setCount] = useState(0);
  const [splashVariant, setSplashVariant] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => (c + 1 < SPLASH_WORDS.length ? c + 1 : 0));
      setSplashVariant((v) => (v < 1 ? 1 : 0));
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <NavBar />

      <div className="tv-static" />

      <div className="splash">
        <div className="splash__text">
          {SPLASH_WORDS[count]}
        </div>

        <div className={`splash__shadow splash__glitch${splashVariant}`}>
          {SPLASH_WORDS[count]}
        </div>

        {/* <div className='hide-text'>
          {words}
        </div> */}

        <div className="arrow--delay">
          <div className="arrow" aria-hidden="true">
            &darr;
          </div>
        </div>

      </div>

      {/* Create an anchor point for the fade */}
      <div className="splash-fade--container">
        {/* Create the fade but  */}
        <div className="splash-fade" />
      </div>
      <div className="splash-fade__padding" />

      <Outlet />

      <Footer />
    </>
  );
}

export default Splash;
