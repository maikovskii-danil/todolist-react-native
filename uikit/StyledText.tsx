import { StyleSheet, Text, TextProps } from 'react-native';

const styles = StyleSheet.create({
  'default': {},
  'default-white': {
    color: 'white',
  },
  'bold': {
    fontWeight: 'bold',
  },
  'header-bold': {
    fontSize: 20,
    fontWeight: 'bold',
  },
  'large-bold': {
    fontSize: 32,
    fontWeight: 'bold',
  },
  'line-through': {
    textDecorationLine: 'line-through',
  },
});

interface Props extends TextProps {
  styleStrategy?: keyof typeof styles;
}

const StyledText = ({
  styleStrategy = 'default',
  style,
  ...otherProps
}: Props) => {
  return (
    <Text
      style={[style, styles[styleStrategy]]}
      {...otherProps}
    />
  );
};

export default StyledText;
