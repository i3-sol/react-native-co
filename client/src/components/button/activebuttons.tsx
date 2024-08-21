import React from "react";
import styled from "styled-components/native";
import { Pressable, PressableProps, View } from "react-native";

import { TextActiveH4 } from "../typography";
import { getWidth } from "../../theme/responsive";

interface ActiveFirstButtonProps {
	active?: boolean
	text: string
}

interface ActiveThirdButtonProps extends PressableProps {
	borderRadius?: number
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

const ActiveThirdButton = ({ children, borderRadius = 8, ...props }: ActiveThirdButtonProps) => {
	return (
		<ShadowButtonWrapper>
			<ActiveThirdButtonShadow borderRadius={borderRadius} />

			<ActiveThirdButtonContainer borderRadius={borderRadius} {...props}>
				{children}
			</ActiveThirdButtonContainer>
		</ShadowButtonWrapper>
	)
}

const ActiveThirdButtonContainer = styled(Pressable)<{ borderRadius: number }>(({ theme, borderRadius }) => ({
	display: "flex",
	flexDirection: "row",
	alignItems: 'center',
	justifyContent: 'center',

	borderRadius: borderRadius,
	padding: getWidth(3.5),
	background: theme.SecondBackground,
	border: `1px solid ${theme.SecondBackground}`,
}))

const ActiveThirdButtonShadow = styled(View)<{ borderRadius: number }>(({ theme, borderRadius }) => ({
	top: 2, left: 2,
	position: "absolute",

	width: "100%",
	height: "100%",
	borderRadius: borderRadius,
	backgroundColor: theme.black,
	opacity: 0.25,
}))

const ShadowButtonWrapper = styled(View)({
	position: "relative",
	paddingBottom: 2,
	paddingRight: 2,
})

const ActiveFourthButton = ({ children, borderRadius = 8, ...props }: ActiveThirdButtonProps) => {
	return (
		<ShadowButtonWrapper>
			<ActiveFourthButtonShadow borderRadius={borderRadius} />

			<ActiveFifthButtonContainer borderRadius={borderRadius} {...props}>
				{children}
			</ActiveFifthButtonContainer>
		</ShadowButtonWrapper>
	)
}


const ActiveFifthButtonContainer = styled(Pressable)<{ borderRadius: number }>(({ theme, borderRadius }) => ({
	display: "flex",
	flexDirection: "row",
	alignItems: 'center',
	justifyContent: 'center',

	borderRadius: borderRadius,
	padding: getWidth(3.5),
	background: theme.white,
	border: `1px solid ${theme.SecondBackground}`,
}))

const ActiveFourthButtonShadow = styled(View)<{ borderRadius: number }>(({ theme, borderRadius }) => ({
	top: 2, left: 2,
	position: "absolute",

	width: "100%",
	height: "100%",
	borderRadius: borderRadius,
	backgroundColor: theme.SecondBackground,
}))

const ActiveFifthButton = ({ children, borderRadius = 8, ...props }: ActiveThirdButtonProps) => {
	return (
		<ShadowButtonWrapper>
			<ActiveFifthButtonShadow borderRadius={borderRadius} />

			<ActiveFourthButtonContainer borderRadius={borderRadius} {...props}>
				{children}
			</ActiveFourthButtonContainer>
		</ShadowButtonWrapper>
	)
}


const ActiveFourthButtonContainer = styled(Pressable)<{ borderRadius: number }>(({ theme, borderRadius, disabled = false }) => ({
	display: "flex",
	flexDirection: "row",
	alignItems: 'center',
	justifyContent: 'center',

	borderRadius: borderRadius,
	padding: `${getWidth(2.5)}px ${getWidth(3)}px`,
	background: disabled ? theme.fourthBackground : theme.thirdBackground,
	border: `1px solid ${disabled ? theme.fourthBackground : theme.thirdBackground}`,
}))

const ActiveFifthButtonShadow = styled(View)<{ borderRadius: number }>(({ theme, borderRadius }) => ({
	top: 2, left: 2,
	position: "absolute",

	width: "100%",
	height: "100%",
	borderRadius: borderRadius,
	backgroundColor: theme.black,
	opacity: 0.25,
}))

export {
	ActiveFirstButton,
	ActiveSecondButton,
	ActiveThirdButton,
	ActiveFourthButton,
	ActiveFifthButton,
}