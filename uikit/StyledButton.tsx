import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import StyledText from './StyledText';

const classNames = {
  'default': 'bg-cyan-400 px-3 py-1 rounded-3xl flex justify-center',
  'confirm': 'bg-blue-500 px-3 py-1 rounded-3xl flex justify-center',
  'custom': '',
  'icon-microphone':
    'bg-blue-500 px-[6px] py-1 rounded-full w-9 h-9 flex justify-center flex-1',
  'icon-microphone-processing':
    'bg-red-500 px-[6px] py-1 rounded-full w-9 h-9 flex justify-center flex-1',
  'icon-delete':
    'bg-red-500 px-[6px] py-1 rounded-lg w-9 h-9 flex justify-center flex-1',
  'icon-edit':
    'bg-purple-500 p-2 rounded-lg w-9 h-9 flex justify-center flex-1',
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
