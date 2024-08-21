import { Text } from "react-native";
import styled from "styled-components/native";

const TextH1 = styled(Text)(({ theme }) => ({
	fontSize: 35,
	fontWeight: 600,
	color: theme.typographyFirstColor,
}))

const TextH3 = styled(Text)(({ theme }) => ({
	fontSize: 12,
	fontWeight: 800,
	color: theme.typographyBaseColor,
}))

const TextH4 = styled(Text)(({ theme }) => ({
	fontSize: 10,
	fontWeight: 400,
	color: theme.typographyBaseColor,
}))

const TextActiveH4 = styled(TextH4)(({ theme }) => ({
	color: theme.typographyActiveColor,
}))

const TextActive1H4 = styled(TextH4)(({ theme }) => ({
	color: theme.typographyThirdColor,
}))

const TextH5 = styled(Text)(({ theme }) => ({
	fontSize: 8.5,
	fontWeight: 400,
	lineHeight: '9.5px',
	color: theme.typographyBaseColor,
}))

const TextActiveH5 = styled(TextH5)(({ theme }) => ({
	color: theme.typographyActiveColor,
}))

const TextActive1H5 = styled(TextH5)(({ theme }) => ({
	color: theme.typographyThirdColor,
}))

const TextH6 = styled(Text)(({ theme }) => ({
	fontSize: 7,
	fontWeight: 400,
	color: theme.typographyBaseColor,
}))

const TextBody1 = styled(Text)(({ theme }) => ({
	fontSize: 6,
	fontWeight: 400,
	color: theme.typographyBaseColor,
}))

export {
	TextH1,
	TextH3,
	TextH4,
	TextH5,
	TextH6,
	TextBody1,

	TextActiveH4,
	TextActive1H4,
	TextActiveH5,
	TextActive1H5,
}