import TopNavbar from './TopNavbar';
import BottomNavbar from './BottomNavbar';
import React from 'react';
import MobileMenu from '../Utils/MobileMenu';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
    const options = [
            {
                text: 'Home',
                href: '/',
            },
            {
                text: 'News Events',
                href: '/news',
            },
            {
                text: 'Courses',
                href: '/courses',
            },
            {
                text: 'Campaign',
                href: '/campaign',
            },
            {
                text: 'Media',
                href: '/media',
            },
            {
                text: 'Promotion',
                href: '/promotion',
            },
            {
                text: 'Contact us',
                href: '/contact',
            },
        ];
    return (
        <>
            <nav id='navbar' className="sticky top-0 left-0 z-50 shadow-md">
                <TopNavbar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen}/>
                <BottomNavbar options={options}/>
                {mobileMenuOpen && (<MobileMenu options={options} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen}/>)}
            </nav>
        </>

    );
};

export default Navbar;
