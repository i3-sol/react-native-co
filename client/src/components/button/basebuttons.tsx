import { Pressable } from "react-native";
import styled from "styled-components/native";

import { getWidth } from "../../theme/responsive";

const BaseTransparentButton = styled(Pressable)<{ borderRadius?: number, borderColor?: string }>(({ theme, borderRadius = 20, borderColor = 'black' }) => ({
	gap: getWidth(1.8),
	display: "flex",
	flexDirection: "row",
	alignItems: 'center',
	justifyContent: 'center',
	background: theme.baseBackground,
	padding: getWidth(3.3),
	border: `0.75px solid ${theme[borderColor]}`,
	borderRadius: borderRadius,
}))

export { BaseTransparentButton }