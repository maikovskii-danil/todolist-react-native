import { ITodoItem } from '@/types';
import StyledButton from '@/uikit/StyledButton';
import StyledText from '@/uikit/StyledText';
import StyledTextInput from '@/uikit/StyledTextInput';
import Voice from '@react-native-voice/voice';
import { useEffect, useState } from 'react';
import { View } from 'react-native';

interface Props {
  onSubmit: (todoItem: ITodoItem) => void;
  onClose: () => void;
}

const AddTodoItemForm = (props: Props) => {
  const { onSubmit, onClose } = props;

  const [recognizedText, setRecognizedText] = useState('');
  const [isRecognizing, setIsRecognizing] = useState(false);

  useEffect(() => {
    Voice.onSpeechPartialResults = (evt) => {
      setRecognizedText(evt.value?.at(0) ?? '');
    };

    return () => {
      Voice.removeAllListeners();
      Voice.destroy();
    };
  }, []);

  return (
    <View className="flex flex-col gap-4 p-1">
      <StyledText
        className="mb-2"
        styleStrategy="large-bold"
      >
        Adding Form
      </StyledText>
      <View className="flex flex-row items-center gap-2 min-h-9">
        <StyledButton
          styleStrategy={
            isRecognizing ? 'icon-microphone-processing' : 'icon-microphone'
          }
          onPress={() => {
            if (isRecognizing) {
              Voice.stop().then(() => {
                if (setIsRecognizing) {
                  setIsRecognizing((prev) => !prev);
                }
              });
            } else {
              Voice.start('en-US').then(() => {
                if (setIsRecognizing) {
                  setIsRecognizing((prev) => !prev);
                }
              });
            }
          }}
        />
        <StyledText>
          {isRecognizing ? 'Recognizing...' : 'Click icon to start recognizing'}
        </StyledText>
      </View>
      <StyledTextInput
        placeholder="Input title of new item"
        placeholderTextColor="gray"
        value={recognizedText}
        onChangeText={setRecognizedText}
      />
      <View className="flex flex-row gap-2">
        <StyledButton
          styleStrategy="confirm"
          label="Add todo"
          disabled={recognizedText.trim().length === 0}
          onPress={() => {
            onSubmit({
              id: Date.now(),
              title: recognizedText,
              isCompleted: false,
            });

            if (isRecognizing) {
              Voice.stop();
            }

            setIsRecognizing(false);
            setRecognizedText('');
          }}
        />
        <StyledButton
          styleStrategy="danger"
          label="Close"
          onPress={onClose}
        />
      </View>
    </View>
  );
};

export default AddTodoItemForm;
