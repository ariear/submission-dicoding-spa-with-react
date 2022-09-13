import { BiArchiveIn ,BiArchiveOut} from "react-icons/bi";

const ArchiveOrNotBtn = ({id,archived,onArchivedAndActiveHandler}) => {
    return (
        <>
        {
            archived ? 
                <BiArchiveOut size={28} style={{ marginRight: 15 }} onClick={() => onArchivedAndActiveHandler(id,archived)} /> 
                : 
                <BiArchiveIn size={28} style={{ marginRight: 15 }} onClick={() => onArchivedAndActiveHandler(id,archived)} /> 
        }
        </>
    )
}

export default ArchiveOrNotBtn