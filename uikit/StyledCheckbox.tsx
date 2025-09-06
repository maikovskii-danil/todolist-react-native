import { View } from 'react-native';
import StyledButton from './StyledButton';

interface Props {
  checked?: boolean;
  onChange?: (value: boolean) => void;
}

const StyledCheckbox = (props: Props) => {
  const { checked = true, onChange = () => {} } = props;

  return (
    <StyledButton
      className="relative border-solid border-blue-500 border-2 rounded bg-white w-4 h-4"
      styleStrategy="custom"
      onPress={() => {
        onChange(!checked);
      }}
    >
      {checked && (
        <View className="absolute w-full h-full rounded border-2 border-solid border-white bg-blue-500"></View>
      )}
    </StyledButton>
  );
};

export default StyledCheckbox;
