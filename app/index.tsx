import TodoItem from '@/components/TodoItem';
import { todosExample } from '@/consts';
import AddTodoItemForm from '@/forms/AddTodoItemForm';
import Header from '@/layout/Header';
import { FlatList, StatusBar, StyleSheet, View } from 'react-native';
import { useImmer } from 'use-immer';

const styles = StyleSheet.create({
  container: { backgroundColor: 'white', flex: 1 },
  list: { paddingVertical: 12 },
});

export default function Index() {
  const [todos, updateTodos] = useImmer(todosExample);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
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
          style={styles.list}
          data={todos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={{ paddingVertical: 2, paddingHorizontal: 4 }}>
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
