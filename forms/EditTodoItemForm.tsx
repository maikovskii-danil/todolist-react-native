import { ITodoItem } from '@/types';
import StyledButton from '@/uikit/StyledButton';
import StyledText from '@/uikit/StyledText';
import StyledTextInput from '@/uikit/StyledTextInput';
import { useState } from 'react';
import { View } from 'react-native';

interface Props {
  todoItem: ITodoItem;
  onClose: () => void;
  onEdit: (todoItem: ITodoItem) => void;
}

const EditTodoItemForm = (props: Props) => {
  const { todoItem, onClose, onEdit } = props;
  const [editableTitle, setEditableTitle] = useState(todoItem.title);

  return (
    <>
      <StyledText
        styleStrategy="large-bold"
        className="mb-3"
      >
        Editing Form
      </StyledText>
      <StyledText>
        If you click &apos;<StyledText styleStrategy="bold">Confirm</StyledText>
        &apos;, you edit an item with title:
      </StyledText>
      <View>
        <StyledText styleStrategy="default-white">-</StyledText>
      </View>
      <StyledText>
        &apos;
        <StyledText styleStrategy="bold">{todoItem.title}</StyledText>
        &apos;
      </StyledText>
      <View>
        <StyledText styleStrategy="default-white">-</StyledText>
      </View>
      <StyledTextInput
        className="w-75"
        placeholder="Input text"
        placeholderTextColor="gray"
        value={editableTitle}
        onChangeText={setEditableTitle}
      />
      <View>
        <StyledText styleStrategy="default-white">-</StyledText>
      </View>
      <View className="flex flex-row gap-2">
        <StyledButton
          styleStrategy="confirm"
          label="Confirm"
          disabled={editableTitle.trim().length === 0}
          onPress={() => {
            onEdit({ ...todoItem, title: editableTitle });
            onClose();
          }}
        />
        <StyledButton
          label="Close"
          onPress={onClose}
        />
      </View>
    </>
  );
};

export default EditTodoItemForm;
