import {Link} from 'react-router-dom'
 
const Nav = () => {
    return (
        <nav>
            <h1><Link to='/'>CatatanKU</Link></h1>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/archivednotes'>Archived Notes</Link></li>
                <li><Link to='/addnote'>Add Note</Link></li>
            </ul>
        </nav>
    )
}

export default Nav