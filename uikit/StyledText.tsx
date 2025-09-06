import { Text, TextProps } from 'react-native';

const classNames = {
  'default': '',
  'default-white': 'text-white',
  'bold': 'font-bold',
  'header-bold': 'text-xl font-bold',
  'large-bold': 'text-3xl font-bold',
  'line-through': 'line-through',
};

interface Props extends TextProps {
  styleStrategy?: keyof typeof classNames;
}

const StyledText = ({
  styleStrategy = 'default',
  className,
  ...otherProps
}: Props) => {
  return (
    <Text
      className={[classNames[styleStrategy], className].join(' ')}
      {...otherProps}
    />
  );
};

export default StyledText;
