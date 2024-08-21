import React from "react";
import styled from "styled-components/native";
import { Pressable, PressableProps, View } from "react-native";

import { TextActiveH4 } from "../typography";
import { getWidth } from "../../theme/responsive";

interface ActiveFirstButtonProps {
	active?: boolean
	text: string
}

const ActiveFirstButton = ({ text, active = false }: ActiveFirstButtonProps) => {
	return (
		<ActiveFirstButtonWrapper active={active}>
			<TextActiveH4>{text}</TextActiveH4>
		</ActiveFirstButtonWrapper>
	)
}

const ActiveFirstButtonWrapper = styled(View)<{ active: boolean }>(({ theme, active }) => ({
	textWrap: "nowrap",
	display: "inline-block",
	padding: `${theme.globalBoxPadding}px ${theme.globalBoxPadding * 3.2}px`,
	backgroundColor: active ? theme.hoverActiveColor : theme.white,
	border: `0.8px solid ${theme.borderActiveColor}`,
	borderRadius: 6,
}))

const ActiveSecondButton = styled(Pressable)<{ borderRadius?: number }>(({ theme, borderRadius = 20 }) => ({
	display: "flex",
	flexDirection: "row",
	alignItems: 'center',
	justifyContent: 'center',
	background: theme.SecondBackground,
	padding: getWidth(4),
	borderRadius: borderRadius,
}))

const ActiveThirdButton = ({ children, ...props }: PressableProps) => {
	return (
		<ShadowButtonWrapper>
			<ActiveThirdButtonShadow />

			<ActiveThirdButtonContainer {...props}>
				{children}
			</ActiveThirdButtonContainer>
		</ShadowButtonWrapper>
	)
}

const ActiveThirdButtonContainer = styled(Pressable)(({ theme }) => ({
	display: "flex",
	flexDirection: "row",
	alignItems: 'center',
	justifyContent: 'center',

	borderRadius: 8,
	padding: getWidth(3.5),
	background: theme.SecondBackground,
	border: `1px solid ${theme.SecondBackground}`,
}))

const ActiveThirdButtonShadow = styled(View)(({ theme }) => ({
	top: 2, left: 2,
	position: "absolute",

	width: "100%",
	height: "100%",
	borderRadius: 8,
	backgroundColor: theme.black,
}))

const ShadowButtonWrapper = styled(View)({
	position: "relative",
	paddingBottom: 2,
	paddingRight: 2,
})

const ActiveFourthButton = ({ children, ...props }: PressableProps) => {
	return (
		<ShadowButtonWrapper>
			<ActiveFourthButtonShadow />

			<ActiveFourthButtonContainer  {...props}>
				{children}
			</ActiveFourthButtonContainer>
		</ShadowButtonWrapper>
	)
}


const ActiveFourthButtonContainer = styled(Pressable)(({ theme }) => ({
	display: "flex",
	flexDirection: "row",
	alignItems: 'center',
	justifyContent: 'center',

	borderRadius: 8,
	padding: getWidth(3.5),
	background: theme.white,
	border: `1px solid ${theme.SecondBackground}`,
}))

const ActiveFourthButtonShadow = styled(View)(({ theme }) => ({
	top: 2, left: 2,
	position: "absolute",

	width: "100%",
	height: "100%",
	borderRadius: 8,
	backgroundColor: theme.SecondBackground,
}))

export {
	ActiveFirstButton,
	ActiveSecondButton,
	ActiveThirdButton,
	ActiveFourthButton,
}