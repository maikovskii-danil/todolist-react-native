import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import StyledText from './StyledText';

const classNames = {
  'default': 'bg-blue-500 px-3 py-1 rounded-3xl flex justify-center',
  'confirm': 'bg-blue-500 px-3 py-1 rounded-3xl flex justify-center',
  'danger': 'bg-red-500 px-3 py-1 rounded-3xl flex justify-center',
  'custom': '',
  'icon-microphone':
    'bg-blue-500 py-1 rounded-full w-9 h-9 flex justify-center items-center flex-shrink-0',
  'icon-microphone-processing':
    'bg-red-500 py-1 rounded-full w-9 h-9 flex justify-center items-center flex-shrink-0',
  'icon-delete':
    'bg-red-500 rounded-lg w-9 h-9 flex justify-center items-center flex-shrink-0',
  'icon-edit':
    'bg-purple-500 rounded-lg w-9 h-9 flex justify-center items-center flex-shrink-0',
};

interface Props extends TouchableOpacityProps {
  label?: string;
  styleStrategy?: keyof typeof classNames;
}

const StyledButton = (props: Props) => {
  const {
    label = 'button',
    styleStrategy = 'default',
    className,
    children,
    ...otherProps
  } = props;

  return (
    <TouchableOpacity
      className={[classNames[styleStrategy], className].join(' ')}
      {...otherProps}
    >
      {['default', 'danger', 'confirm'].includes(styleStrategy) && (
        <StyledText styleStrategy="bold-white">{label}</StyledText>
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
      {styleStrategy === 'icon-microphone' && (
        <MaterialCommunityIcons
          name="microphone"
          size={18}
          color="white"
        />
      )}
      {styleStrategy === 'icon-microphone-processing' && (
        <MaterialIcons
          name="stop"
          size={20}
          color="white"
        />
      )}
    </TouchableOpacity>
  );
};

export default StyledButton;
