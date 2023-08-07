import { Link } from 'react-router-dom'
import './header.css'

export default function Header() {
    return(
        <div className='header'>
            {/* will need to change to users ranch name */}
            <Link to='/'>
            <h1>KK Ranch</h1>
            </Link>

            <Link to='/calendar'>
                <span>Calendar</span>
            </Link>

            <Link to='/horseSearch'>
                <span>Horses</span>
            </Link>
        </div>
    )
}