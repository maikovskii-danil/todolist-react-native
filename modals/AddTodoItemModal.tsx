import AddTodoItemForm from '@/forms/AddTodoItemForm';
import { ITodoItem } from '@/types';
import StyledModal from '@/uikit/StyledModal';

interface Props {
  isOpen: boolean;
  onSubmit: (todoItem: ITodoItem) => void;
  onClose: () => void;
}

const AddTodoItemModal = (props: Props) => {
  const { isOpen, onSubmit, onClose } = props;

  return (
    <StyledModal
      isOpen={isOpen}
      onClose={onClose}
    >
      <AddTodoItemForm
        onSubmit={(todoItem) => {
          onSubmit(todoItem);
          onClose();
        }}
        onClose={onClose}
      />
    </StyledModal>
  );
};

export default AddTodoItemModal;
