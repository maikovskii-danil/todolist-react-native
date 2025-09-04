import ConfirmDeleteTodoItemModal from '@/modals/ConfirmDeleteTodoItemModal';
import EditTodoItemModal from '@/modals/EditTodoItemModal';
import { ITodoItem } from '@/types';
import StyledButton from '@/uikit/StyledButton';
import StyledCheckbox from '@/uikit/StyledCheckbox';
import StyledText from '@/uikit/StyledText';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    backgroundColor: 'coral',
    borderRadius: 6,
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    width: '100%',
    overflow: 'hidden',
  },
});

interface Props {
  todoItem: ITodoItem;
  onEdit: (todoItem: ITodoItem) => void;
  onDelete: (id: ITodoItem['id']) => void;
}

const TodoItem = (props: Props) => {
  const { todoItem, onEdit, onDelete } = props;

  const [isOpenConfirmDelete, setIsOpenConfirmDelete] = useState(false);
  const [isOpenEdit, setIsOpenEdit] = useState(false);

  return (
    <>
      <ConfirmDeleteTodoItemModal
        isOpen={isOpenConfirmDelete}
        onClose={() => {
          setIsOpenConfirmDelete(false);
        }}
        todoItem={todoItem}
        onDelete={onDelete}
      />
      <EditTodoItemModal
        isOpen={isOpenEdit}
        onClose={() => {
          setIsOpenEdit(false);
        }}
        todoItem={todoItem}
        onEdit={onEdit}
      />
      <View style={styles.container}>
        <View style={{ marginRight: 6 }}>
          <StyledCheckbox
            checked={todoItem.isCompleted}
            onChange={() => {
              onEdit({ ...todoItem, isCompleted: !todoItem.isCompleted });
            }}
          />
        </View>
        <StyledText
          style={{ width: 290 }}
          styleStrategy={todoItem.isCompleted ? 'line-through' : 'default'}
        >
          {todoItem.title}
        </StyledText>
        <View
          style={{ width: 90, display: 'flex', flexDirection: 'row', gap: 8 }}
        >
          <StyledButton
            styleStrategy="icon-edit"
            onPress={() => {
              setIsOpenEdit(true);
              // onEdit({ ...todoItem, title: 'edited title' });
            }}
          />
          <StyledButton
            styleStrategy="icon-delete"
            onPress={() => {
              setIsOpenConfirmDelete(true);
            }}
          />
        </View>
      </View>
    </>
  );
};

export default TodoItem;
