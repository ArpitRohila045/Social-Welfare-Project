import TopNavbar from './TopNavbar';
import BottomNavbar from './BottomNavbar';


const Navbar = () => {
    return (
        <nav id='navbar' className="sticky top-0 left-0 z-50 shadow-md">
            <TopNavbar/>
            <BottomNavbar/>
        </nav>
    );
};

export default Navbar;
