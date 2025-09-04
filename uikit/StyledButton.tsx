import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import StyledText from './StyledText';

const styles = StyleSheet.create({
  'default': {
    backgroundColor: 'coral',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
  'confirm': {
    backgroundColor: 'blue',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
  'custom': {},
  'icon-delete': {
    backgroundColor: 'red',
    paddingHorizontal: 6,
    paddingVertical: 6,
    borderRadius: 8,
    width: 36,
    height: 36,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  'icon-edit': {
    backgroundColor: 'purple',
    paddingHorizontal: 6,
    paddingVertical: 6,
    borderRadius: 8,
    width: 36,
    height: 36,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

interface Props extends TouchableOpacityProps {
  label?: string;
  styleStrategy?: keyof typeof styles;
}

const StyledButton = (props: Props) => {
  const {
    label = 'button',
    styleStrategy = 'default',
    style,
    children,
    ...otherProps
  } = props;

  return (
    <TouchableOpacity
      style={[style, styles[styleStrategy]]}
      {...otherProps}
    >
      {styleStrategy === 'default' && <StyledText>{label}</StyledText>}
      {styleStrategy === 'confirm' && (
        <StyledText styleStrategy="default-white">{label}</StyledText>
      )}
      {styleStrategy === 'custom' && children}
      {styleStrategy === 'icon-delete' && (
        <MaterialCommunityIcons
          name="delete-outline"
          size={20}
          color="white"
        />
      )}
      {styleStrategy === 'icon-edit' && (
        <MaterialIcons
          name="edit"
          size={18}
          color="white"
        />
      )}
    </TouchableOpacity>
  );
};

export default StyledButton;
