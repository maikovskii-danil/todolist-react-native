import StyledText from '@/uikit/StyledText';
import { View } from 'react-native';

interface Props {
  allTodos: number;
  completedTodos: number;
}

const Header = (props: Props) => {
  const { allTodos, completedTodos } = props;

  return (
    <View>
      <View className="pt-20 pb-5 w-full">
        <StyledText
          className="text-center"
          styleStrategy="large-bold"
        >
          Todo App
        </StyledText>
        <StyledText className="text-center">
          {new Date().toDateString()}
        </StyledText>
      </View>
      <StyledText>
        Completed: {completedTodos} / {allTodos}
      </StyledText>
    </View>
  );
};

export default Header;
