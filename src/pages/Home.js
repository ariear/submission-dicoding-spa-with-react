import React from "react"
import { useSearchParams } from 'react-router-dom';
import NoteList from "../components/NoteList"
import SearchBar from "../components/SearchBar"
import { getActiveNotes } from "../utils/local-data"

const HomeWrapper = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const keyword = searchParams.get('keyword');
    function changeSearchParams(keyword) {
        setSearchParams({ keyword });
      }

    return <Home defaultKeyword={keyword} keywordChange={changeSearchParams} />
}
class Home extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            notes: getActiveNotes() || [],
            keyword: props.defaultKeyword || ''
        }

        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this)
    }

    onKeywordChangeHandler(keyword) {
        this.setState(() => {
          return {
            keyword,
          }
        });
    
        this.props.keywordChange(keyword);
      }

    render() {
        const notes = this.state.notes.filter((note) => {
            return note.title.toLowerCase().includes(
              this.state.keyword.toLowerCase()
            );
          });

        return(
            <div className="container">
            <h1>Active Notes</h1>
            <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
            <NoteList notes={notes} messageNotFound="Tidak ada catatan" />
            </div>
        )
    }
}

export default HomeWrapper