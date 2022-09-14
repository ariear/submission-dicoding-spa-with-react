import React from 'react';
import {Link} from 'react-router-dom'
import { FiMoreVertical } from "react-icons/fi"; 

class Nav extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            isOpen: false
        }
    }
    render(){
        return(
        <nav>
            <h1><Link to='/'>CatatanKU</Link></h1>
            <ul className='nav-list'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/archivednotes'>Archived Notes</Link></li>
                <li><Link to='/addnote'>Add Note</Link></li>
            </ul>
            <div className='nav-list-mobile'>
                <FiMoreVertical size="27" className="icon-menu" onClick={() => this.setState({isOpen: !this.state.isOpen})} />
                <ul className='nav-list-mobile-child' style={{width: this.state.isOpen ? '70vw' : 0}}>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/archivednotes'>Archived Notes</Link></li>
                    <li><Link to='/addnote'>Add Note</Link></li>
                </ul>
            </div>
        </nav>
        )
    }
}

export default Nav