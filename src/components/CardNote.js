import { Link } from "react-router-dom"
import PropTypes from 'prop-types';

const CardNote = ({note}) => {
    return (
        <Link to={`/notes/${note.id}`} className="cardNote">
        <div>
            <p className="title-card">{note.title}</p>
            <p>{note.body.substring(0,70) + '...'}</p>
            <p className="date-card">{note.createdAt}</p>
        </div>
        </Link>
    )
}

CardNote.propTypes = {
    note: PropTypes.object.isRequired
}

export default CardNote