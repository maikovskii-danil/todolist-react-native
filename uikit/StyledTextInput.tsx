import { TextInput, TextInputProps } from 'react-native';

const classNames = {
  default: 'p-2 rounded-md border-black border-solid border',
};

interface Props extends TextInputProps {
  styleStrategy?: keyof typeof classNames;
}

const StyledTextInput = ({
  styleStrategy = 'default',
  className,
  ...otherProps
}: Props) => {
  return (
    <TextInput
      className={[classNames[styleStrategy], className].join(' ')}
      {...otherProps}
    />
  );
};

export default StyledTextInput;
