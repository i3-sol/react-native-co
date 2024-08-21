import styled from "styled-components/native";
import { StyleSheet, View, ViewProps } from "react-native";

import { TextH5 } from "../typography";
import { getWidth } from "../../theme/responsive";

interface BaseDividerProps extends ViewProps {
	text?: string
	size?: number
	color?: string
}

const BaseDivider = ({ text, ...props }: BaseDividerProps) => {
	return (
		<BaseDividerWrapper {...props}>
			{text && (
				<BaseDividerContainer>
					<TextH5 style={styles.textStyle}>{text}</TextH5>
				</BaseDividerContainer>
			)}
		</BaseDividerWrapper>
	)
}

const BaseDividerWrapper = styled(View)<{ size?: number, color?: string }>(({ theme, size = 2, color = "" }) => ({
	width: "100%",
	position: "relative",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	height: size, backgroundColor: color ? color : theme.footerBackground,
}))

const BaseDividerContainer = styled(View)(({ theme }) => ({
	position: "absolute",
	backgroundColor: theme.white,
	padding: getWidth(3),
}))

const styles = StyleSheet.create({
	textStyle: {
		fontWeight: 700,
	}
})

export { BaseDivider };