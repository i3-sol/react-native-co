import { TextInput } from "react-native";
import styled from "styled-components/native";

const BaseTextInput = styled(TextInput)(({ theme }) => ({
	flex: 1,
	height: 25,
	padding: '0px 2px',
	margin: 0,
	fontSize: 10.5,
	color: theme.typographyBaseColor,
}))

export { BaseTextInput };