import React from "react";
import { useParams,useNavigate  } from "react-router-dom";
import ArchiveOrNotBtn from "../components/ArchiveOrNotBtn";
import DeleteBtn from "../components/DeleteBtn";
import { archiveNote, deleteNote, getNote, unarchiveNote } from "../utils/local-data";

const DetailNoteWrapper = () => {
    const navigate = useNavigate();
    const {id} = useParams()

    const onDeleteHandler = (id) => {
        deleteNote(id)
        
        navigate('/')
    }

    const onArchivedAndActiveHandler = (id,archived) => {
        if (archived) {
            unarchiveNote(id)
        }else{
            archiveNote(id)
        }

        navigate('/')
    }

    return (
        <DetailNote id={id} onDeleteHandler={onDeleteHandler} onArchivedAndActiveHandler={onArchivedAndActiveHandler} />
    )
}

class DetailNote extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            note: getNote(this.props.id)
        }
    }

    render() {
        return(
            <div className="container">
                <div className="title-detail">
                <h1>{this.state.note.title}</h1>
                <div>
                <ArchiveOrNotBtn id={this.state.note.id} archived={this.state.note.archived} onArchivedAndActiveHandler={this.props.onArchivedAndActiveHandler} />
                <DeleteBtn id={this.state.note.id} onDeleteHandler={this.props.onDeleteHandler} />
                </div>
                </div>
                <p>{this.state.note.createdAt}</p>
                <p className="content-detail">{this.state.note.body}</p>
            </div>
        )
    }
}

export default DetailNoteWrapper