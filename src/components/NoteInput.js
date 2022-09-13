import React from "react"
import { useNavigate } from "react-router-dom";
import { addNote } from "../utils/local-data"

const NoteInputWrapper = () => {
    const navigate = useNavigate();

    const onSubmitHandler = (e,state) => {
        e.preventDefault()

        addNote(state)

        navigate('/')
    }
    
    return <NoteInput onSubmitHandler={onSubmitHandler} />
}

class NoteInput extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            title: '',
            body: ''
        }

        this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this)
        this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this)
    }

    onTitleChangeHandler(e){
        this.setState(() => {
            return{
                title: e.target.value
            }
        })   
    }
    onBodyChangeHandler(e){
        this.setState(() => {
            return{
                body: e.target.value
            }
        })   
    }

    render() {
     return (
        <form className="form-input" onSubmit={(e) => this.props.onSubmitHandler(e, this.state)}>
            <input type="text" placeholder="Title here" onChange={this.onTitleChangeHandler} required />
            <textarea cols="30" rows="10" placeholder="Body here" onChange={this.onBodyChangeHandler} required></textarea>
            <button>Add</button>
        </form>
     )   
    }
}

export default NoteInputWrapper