import { Link } from "react-router-dom"

const CardNote = ({note}) => {
    return (
        <Link to={`/notes/${note.id}`} className="cardNote">
        <div>
            <p className="title-card">{note.title}</p>
            <p>{note.body}</p>
            <p className="date-card">{note.createdAt}</p>
        </div>
        </Link>
    )
}

export default CardNote