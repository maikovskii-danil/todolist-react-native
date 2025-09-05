import StyledText from '@/uikit/StyledText';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  headerMainContent: {
    paddingTop: 80,
    paddingBottom: 20,
    display: 'flex',
    alignItems: 'center',
  },
});

interface Props {
  allTodos: number;
  completedTodos: number;
}

const Header = (props: Props) => {
  const { allTodos, completedTodos } = props;

  return (
    <View>
      <View style={styles.headerMainContent}>
        <StyledText styleStrategy="large-bold">Todo App</StyledText>
        <StyledText>{new Date().toDateString()}</StyledText>
      </View>
      <StyledText>
        Completed: {completedTodos} / {allTodos}
      </StyledText>
    </View>
  );
};

export default Header;
