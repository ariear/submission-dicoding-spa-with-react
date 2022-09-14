import { Route, Routes } from "react-router-dom"
import Nav from "./components/Nav"
import AddNote from "./pages/AddNote"
import ArchivedNotes from "./pages/ArchivedNotes"
import DetailNoteWrapper from "./pages/DetailNote"
import HomeWrapper from "./pages/Home"
import NotFound from "./pages/NotFound"

const App  = () => {
  return (
    <>
    <Nav />
    <Routes>
      <Route path="/" element={<HomeWrapper />} />
      <Route path="/addnote" element={<AddNote />} />
      <Route path="/notes/:id" element={<DetailNoteWrapper />} />
      <Route path="/archivednotes" element={<ArchivedNotes />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  )
}

export default App