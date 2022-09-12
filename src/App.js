import { Route, Routes } from "react-router-dom"
import AddNote from "./pages/AddNote"
import ArchivedNotes from "./pages/ArchivedNotes"
import DetailNote from "./pages/DetailNote"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"

const App  = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/addnote" element={<AddNote />} />
      <Route path="/notes/:id" element={<DetailNote />} />
      <Route path="/archivednotes" element={<ArchivedNotes />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App