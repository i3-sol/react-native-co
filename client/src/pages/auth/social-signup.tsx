import React from "react";
import styled from "styled-components/native";
import { StyleSheet, View } from "react-native";

import { routerConfig } from "../../router-config";
import { getWidth } from "../../theme/responsive";
import { TextH5 } from "../../components/typography";
import { BaseTextInput } from "../../components/input/baseInput";
import { BaseTransparentButton } from "../../components/button/basebuttons";
import { AppleIconSvg, FacebookIconSvg, GoogleIconSvg } from "../../assets/image";


const SocialSignUp = ({ navigation }: ComPropsObject) => {
	const goToSignUp = () => {
		navigation.navigate(routerConfig.signup.name);
	}
	return (
		<SocialSignUpWrapper>
			<BaseItemContainer>
				<BaseTransparentButton borderRadius={6} onPress={goToSignUp}>
					<GoogleIconSvg width={getWidth(4.5)} height={getWidth(4.5)} />
					<TextH5 style={styles.baseText}>Continue with Google</TextH5>
				</BaseTransparentButton>

				<BaseTransparentButton borderRadius={6} onPress={goToSignUp}>
					<FacebookIconSvg width={getWidth(4.5)} height={getWidth(4.5)} />
					<TextH5 style={styles.baseText}>Continue with facebook</TextH5>
				</BaseTransparentButton>

				<BaseTransparentButton borderRadius={6} onPress={goToSignUp}>
					<AppleIconSvg width={getWidth(4.5)} height={getWidth(4.5)} />
					<TextH5 style={styles.baseText}>Continue with apple</TextH5>
				</BaseTransparentButton>
			</BaseItemContainer>
		</SocialSignUpWrapper >
	)
}

const SocialSignUpWrapper = styled(View)(({ theme }) => ({
	flex: 1,
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	gap: getWidth(15),
	padding: `${theme.globalSpacingX}px`,
	backgroundColor: theme.baseBackground,
}))

const BaseItemContainer = styled(View)({
	width: "100%",
	maxWidth: getWidth(74),
	gap: getWidth(1.8),
	display: "flex",
	flexDirection: "column",
})

const styles = StyleSheet.create({
	formContainer: {
		paddingBottom: getWidth(5),
	},
	forgotPasswordText: {
		textAlign: "right",
		fontWeight: 600,
		textDecorationLine: "underline",
	},
	loginText: {
		fontWeight: 700,
	},
	baseText: {
		fontWeight: 600,
	},
	inputText: {
		minWidth: getWidth(15),
	}
})

export { SocialSignUp }