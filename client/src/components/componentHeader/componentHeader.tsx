import styled from "styled-components/native";
import { Pressable, StyleSheet, View } from "react-native";

import { TextH3 } from "../typography";
import { getWidth } from "../../theme/responsive";
import { ActiveLeftIconSvg } from "../../assets/image";

interface ComponentHeaderProps {
	title: string
	onGoBack: () => void
}

const ComponentHeader = ({ title, onGoBack }: ComponentHeaderProps) => {
	return (
		<ComponentHeaderWrapper>
			<Pressable onPress={onGoBack}>
				<ActiveLeftIconSvg width={getWidth(8)} height={getWidth(8)} />
			</Pressable>

			<TextH3 style={styles.headerWeight}>
				{title}
			</TextH3>

			<View />
		</ComponentHeaderWrapper>
	)
}

const ComponentHeaderWrapper = styled(View)(({ theme }) => ({
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "space-between",
	padding: `${theme.globalBoxPadding}px ${theme.globalSpacingX}px`,
	gap: getWidth(4),
}))

const styles = StyleSheet.create({
	headerWeight: {
		fontWeight: 600,
	}
})

export { ComponentHeader }