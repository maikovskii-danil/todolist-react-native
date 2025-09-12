import { ITodoItem } from '@/types';
import StyledButton from '@/uikit/StyledButton';
import StyledText from '@/uikit/StyledText';
import StyledTextInput from '@/uikit/StyledTextInput';
import { useState } from 'react';
import { View } from 'react-native';

interface Props {
  onSubmit: (todoItem: ITodoItem) => void;
  onClose: () => void;
}

const AddTodoItemForm = (props: Props) => {
  const { onSubmit, onClose } = props;

  const [newTodoText, setNewTodoText] = useState('');

  return (
    <View className="flex flex-col gap-4 p-1">
      <StyledText
        className="mb-2"
        styleStrategy="large-bold"
      >
        Adding Form
      </StyledText>
      <StyledTextInput
        placeholder="Input title of new item"
        placeholderTextColor="gray"
        value={newTodoText}
        onChangeText={setNewTodoText}
      />
      <View className="flex flex-row gap-2">
        <StyledButton
          styleStrategy="confirm"
          label="Add todo"
          disabled={newTodoText.trim().length === 0}
          onPress={() => {
            onSubmit({
              id: Date.now(),
              title: newTodoText,
              isCompleted: false,
            });

            setNewTodoText('');
          }}
        />
        <StyledButton
          styleStrategy="danger"
          label="Close"
          onPress={onClose}
        />
      </View>
    </View>
  );
};

export default AddTodoItemForm;
