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
    <View className="flex flex-col gap-2 p-1">
      <StyledTextInput
        placeholder="Input title of new item"
        placeholderTextColor="gray"
        value={newTodoText}
        onChangeText={setNewTodoText}
      />
      <View className="flex flex-row">
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
    </View>
  );
};

export default AddTodoItemForm;
