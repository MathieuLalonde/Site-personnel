import { useState, useEffect } from "react";
import { Outlet } from 'react-router-dom';

import Footer from './Footer';
import NavBar from './NavBar';

const Splash = () => {
    const [count, setCount] = useState(0);
    const [splashVariant, setSplashVariant] = useState(0);
    const words: String[] = ["Créer. ", "Coder. ", "Collaborer. ", "Communiquer. ", "Captiver. ", "Concevoir. "];

    useEffect(() => {
        // Setting the interval
        const interval = setInterval(() => {
            count + 1 < words.length ? setCount(count + 1) : setCount(0);
            splashVariant < 1 ? setSplashVariant(1) : setSplashVariant(0);
        }, 1200);

        // Clearing the interval
        return () => clearInterval(interval);
    }, [count]);

    return (
        <>
            <NavBar />

            <div className="tv-static" />

            <div className='splash' >
                <div className='splash__text'>
                    {words[count]}
                </div>

                <div className={`splash__shadow splash__glitch${splashVariant}`}>
                    {words[count]}
                </div>

                {/* <div className='hide-text'>
          {words}
        </div> */}

                <div className="arrow--delay">
                    <div className='arrow' aria-hidden="true">
                        &darr;
                    </div>
                </div>

            </div>

            {/* Create an anchor point for the fade */}
            <div className="splash-fade--container">
                {/* Create the fade but  */}
                <div className='splash-fade' />
            </div>
            <div className="splash-fade__padding" />

            <Outlet />

            <Footer />
        </>
    );
};

export default Splash;
