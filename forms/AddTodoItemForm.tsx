import { ITodoItem } from '@/types';
import StyledButton from '@/uikit/StyledButton';
import StyledTextInput from '@/uikit/StyledTextInput';
import { useState } from 'react';
import { View } from 'react-native';

interface Props {
  onSubmit: (todoItem: ITodoItem) => void;
}

const AddTodoItemForm = (props: Props) => {
  const { onSubmit } = props;

  const [newTodoText, setNewTodoText] = useState('');

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: 8,
        justifyContent: 'space-between',
        paddingVertical: 4,
        paddingHorizontal: 4,
      }}
    >
      <StyledTextInput
        style={{ width: 300 }}
        placeholder="Input text"
        placeholderTextColor="gray"
        value={newTodoText}
        onChangeText={setNewTodoText}
      />
      <StyledButton
        styleStrategy="default"
        label="Добавить"
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
    </View>
  );
};

export default AddTodoItemForm;
