import { Modal, StyleSheet, TouchableWithoutFeedback, View } from "react-native";

const styles = StyleSheet.create({
    modalBackgroundContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
    },
    contentContainer: {
        margin: 'auto',
        padding: 20,
        borderRadius: 10,
        width: '90%',
        minHeight: 100,
        backgroundColor: 'white',
    },
})

interface Props {
    isOpen: boolean;
    onClose?: () => void;
    onDismiss?: () => void;
    children: React.ReactNode;
}

const StyledModal = (props: Props) => {
    const { isOpen, onClose = () => {}, onDismiss = () => {}, children } = props;

    return (
        <Modal visible={isOpen} onRequestClose={onClose} onDismiss={onDismiss} animationType="fade" transparent>
            <TouchableWithoutFeedback onPress={onClose}>
                <View style={styles.modalBackgroundContainer}>
                    <TouchableWithoutFeedback onPress={(evt) => { evt.stopPropagation() }}>
                        <View style={styles.contentContainer}>
                            {children}
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}

export default StyledModal;