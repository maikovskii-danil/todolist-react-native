import EditTodoItemForm from "@/forms/EditTodoItemForm";
import { ITodoItem } from "@/types";
import StyledModal from "@/uikit/StyledModal";

interface Props {
    isOpen: boolean;
    onClose: () => void;
    todoItem: ITodoItem;
    onEdit: (todoItem: ITodoItem) => void
}

const EditTodoItemModal = (props: Props) => {
    const { isOpen, onClose, todoItem, onEdit } = props;

    return (
        <StyledModal
            isOpen={isOpen}
            onClose={onClose}
        >
            <EditTodoItemForm
                todoItem={todoItem}
                onClose={onClose}
                onEdit={onEdit}
            />
        </StyledModal>
    )
}

export default EditTodoItemModal
