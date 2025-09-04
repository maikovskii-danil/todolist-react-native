import { StyleSheet, View } from 'react-native';
import StyledButton from './StyledButton';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'blue',
    borderRadius: 3,
    backgroundColor: 'white',
    width: 16,
    height: 16,
  },
  insider: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 3,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: 'white',
    backgroundColor: 'blue',
  },
});

interface Props {
  checked?: boolean;
  onChange?: (value: boolean) => void;
}

const StyledCheckbox = (props: Props) => {
  const { checked = true, onChange = () => {} } = props;

  return (
    <StyledButton
      style={styles.container}
      styleStrategy="custom"
      onPress={() => {
        onChange(!checked);
      }}
    >
      {checked && <View style={styles.insider}></View>}
    </StyledButton>
  );
};

export default StyledCheckbox;
