import './Navbar.css'

const Navbar = () => {
    return (
        <div className='nav'>
            <div className="nav-logo">Cars-X</div>
            <ul className="nav-menu">
                <li className='nav-section'>Home</li>
                <li className='nav-section'>Explore</li>
                <li className='nav-section'>About</li>
                <li className='nav-contact'>Contact</li>
            </ul>
        </div>
    )
}

export default Navbar
