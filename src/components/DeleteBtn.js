import { FiTrash } from "react-icons/fi";

const DeleteBtn = ({onDeleteHandler,id}) => {
    return (
        <FiTrash size={28} onClick={() => onDeleteHandler(id)} />
    )
}

export default DeleteBtn