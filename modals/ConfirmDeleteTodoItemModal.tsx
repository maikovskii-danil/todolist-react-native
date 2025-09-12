import { ITodoItem } from '@/types';
import StyledButton from '@/uikit/StyledButton';
import StyledModal from '@/uikit/StyledModal';
import StyledText from '@/uikit/StyledText';
import { View } from 'react-native';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  todoItem: ITodoItem;
  onDelete: (id: ITodoItem['id']) => void;
}

const ConfirmDeleteTodoItemModal = (props: Props) => {
  const { isOpen, onClose, todoItem, onDelete } = props;

  return (
    <StyledModal
      isOpen={isOpen}
      onClose={onClose}
    >
      <StyledText
        styleStrategy="large-bold"
        className="mb-3"
      >
        Are you sure?
      </StyledText>
      <StyledText>
        If you click &apos;<StyledText styleStrategy="bold">Confirm</StyledText>
        &apos;, you delete an item with title:
      </StyledText>
      <View>
        <StyledText styleStrategy="default-white">-</StyledText>
      </View>
      <StyledText>
        &apos;<StyledText styleStrategy="bold">{todoItem.title}</StyledText>
        &apos;
      </StyledText>
      <View>
        <StyledText styleStrategy="default-white">-</StyledText>
      </View>
      <View className="flex flex-row gap-2">
        <StyledButton
          styleStrategy="confirm"
          label="Confirm"
          onPress={() => {
            onClose();
            onDelete(todoItem.id);
          }}
        />
        <StyledButton
          styleStrategy="danger"
          label="Close"
          onPress={onClose}
        />
      </View>
    </StyledModal>
  );
};

export default ConfirmDeleteTodoItemModal;
