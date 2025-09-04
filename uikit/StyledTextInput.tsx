import { StyleSheet, TextInput, TextInputProps } from "react-native";

const styles = StyleSheet.create({
    default: {
        paddingVertical: 6,
        paddingHorizontal: 8,
        borderRadius: 6,
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 1,
    },
})

interface Props extends TextInputProps {
    styleStrategy?: keyof typeof styles;
}

const StyledTextInput = ({ styleStrategy = 'default', style, ...otherProps }: Props) => {
    return <TextInput style={[styles[styleStrategy], style]} {...otherProps} />;
}

export default StyledTextInput
