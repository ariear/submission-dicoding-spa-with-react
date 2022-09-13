import React from "react"
import NoteList from "../components/NoteList"
import { getArchivedNotes } from "../utils/local-data"

class ArchivedNotes extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            notes: getArchivedNotes()
        }
    }

    render() {
        return(
            <div className="container">
            <h1>Archived Notes</h1>
            <NoteList notes={this.state.notes} messageNotFound="Arsip kosong" />
            </div>
        )
    }
}

export default ArchivedNotes