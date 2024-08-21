import { Pressable } from "react-native";
import styled from "styled-components/native";

import { getWidth } from "../../theme/responsive";

const BaseTransparentButton = styled(Pressable)<{ borderRadius?: number }>(({ theme, borderRadius = 20 }) => ({
	gap: getWidth(1.8),
	display: "flex",
	flexDirection: "row",
	alignItems: 'center',
	justifyContent: 'center',
	background: theme.baseBackground,
	padding: getWidth(3.3),
	border: `0.75px solid ${theme.black}`,
	borderRadius: borderRadius,
}))

export { BaseTransparentButton }