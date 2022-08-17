import './header.css'
import MobileNavigation from './MobileNavigation'
import Navigation from './Navigation'


const Header = () => {
    return (
        <header>
            <nav>
                <div className='header-block'>
                    <Navigation />
                    <MobileNavigation />
                </div>
            </nav>
        </header>
    )
}

export default Header