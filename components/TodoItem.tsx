import ConfirmDeleteTodoItemModal from '@/modals/ConfirmDeleteTodoItemModal';
import EditTodoItemModal from '@/modals/EditTodoItemModal';
import { ITodoItem } from '@/types';
import StyledButton from '@/uikit/StyledButton';
import StyledCheckbox from '@/uikit/StyledCheckbox';
import StyledText from '@/uikit/StyledText';
import { useState } from 'react';
import { View } from 'react-native';

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
      <View className="p-3 bg-cyan-400 rounded-md flex flex-row content-center justify-between w-full overflow-hidden">
        <View className="flex flex-row">
          <View className="mr-2">
            <StyledCheckbox
              checked={todoItem.isCompleted}
              onChange={() => {
                onEdit({ ...todoItem, isCompleted: !todoItem.isCompleted });
              }}
            />
          </View>
          <StyledText
            className="w-60 text-left"
            styleStrategy={todoItem.isCompleted ? 'line-through' : 'default'}
          >
            {todoItem.title}
          </StyledText>
        </View>
        <View className="w-20 flex flex-row gap-2">
          <StyledButton
            styleStrategy="icon-edit"
            onPress={() => {
              setIsOpenEdit(true);
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
