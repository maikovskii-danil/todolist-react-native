import { Modal, TouchableWithoutFeedback, View } from 'react-native';

interface Props {
  isOpen: boolean;
  onClose?: () => void;
  onDismiss?: () => void;
  children: React.ReactNode;
}

const StyledModal = (props: Props) => {
  const { isOpen, onClose = () => {}, onDismiss = () => {}, children } = props;

  return (
    <Modal
      visible={isOpen}
      onRequestClose={onClose}
      onDismiss={onDismiss}
      animationType="fade"
      transparent
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View
          className="flex-1 flex"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
        >
          <TouchableWithoutFeedback
            onPress={(evt) => {
              evt.stopPropagation();
            }}
          >
            <View className="m-auto p-5 rounded-lg w-11/12 min-h-24 bg-white">
              {children}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default StyledModal;
