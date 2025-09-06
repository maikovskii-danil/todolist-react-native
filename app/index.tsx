import './index.css';

import TodoItem from '@/components/TodoItem';
import { todosExample } from '@/consts';
import AddTodoItemForm from '@/forms/AddTodoItemForm';
import Header from '@/layout/Header';
import { FlatList, StatusBar, View } from 'react-native';
import { useImmer } from 'use-immer';

export default function Index() {
  const [todos, updateTodos] = useImmer(todosExample);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View className="bg-white flex-1">
        <Header
          allTodos={todos.length}
          completedTodos={todos.filter((item) => item.isCompleted).length}
        />
        <AddTodoItemForm
          onSubmit={(newTodoItem) => {
            updateTodos((draft) => {
              draft.push(newTodoItem);
            });
          }}
        />
        <FlatList
          className="py-3"
          data={todos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View className="py-1 px-2">
              <TodoItem
                todoItem={item}
                onEdit={(editedTodoItem) => {
                  updateTodos((draft) => {
                    const indexOfEditingTodoItem = draft.findIndex(
                      (item) => item.id === editedTodoItem.id,
                    );

                    if (indexOfEditingTodoItem !== -1) {
                      draft[indexOfEditingTodoItem] = editedTodoItem;
                    }
                  });
                }}
                onDelete={(id) => {
                  updateTodos((draft) => {
                    const indexOfDeletingTodoItem = draft.findIndex(
                      (item) => item.id === id,
                    );

                    if (indexOfDeletingTodoItem !== -1) {
                      draft.splice(indexOfDeletingTodoItem, 1);
                    }
                  });
                }}
              />
            </View>
          )}
        />
      </View>
    </>
  );
}
