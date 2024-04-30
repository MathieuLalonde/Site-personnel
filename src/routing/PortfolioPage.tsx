import { Outlet, ScrollRestoration } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import Header from './Header';

const Portfolio = () => {
    return (
        <>
            <div className='container'>
                <h2>
                    Portfolio
                </h2>
            </div>
            <ScrollRestoration />
            <Outlet />
        </>
    );
};

export default Portfolio;
