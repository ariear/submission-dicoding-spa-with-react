import React from "react"
import NoteList from "../components/NoteList"
import { getActiveNotes } from "../utils/local-data"

class Home extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            notes: getActiveNotes() || []
        }
    }

    render() {
        return(
            <div className="container">
            <h1>Active Notes</h1>
            <NoteList notes={this.state.notes} messageNotFound="Tidak ada catatan" />
            </div>
        )
    }
}

export default Home