import styled from "styled-components/native";
import { Pressable, View } from "react-native";

import { LogoSvg } from "../../assets/image";
import { getWidth } from "../../theme/responsive";
import { TextH4 } from "../../components/typography";
import { ActiveFourthButton, ActiveThirdButton } from "../../components/button";
import { routerConfig } from "../../router-config";


const Auth = ({ navigation }: ComPropsObject) => {
	const onGotoHome = () => {
		navigation.navigate(routerConfig.home.name);
	}

	const onGotoSignUp = () => {
		navigation.navigate(routerConfig.signup.name);
	}

	const onGotoSignin = () => {
		navigation.navigate(routerConfig.signin.name);
	}

	return (
		<AuthWrapper>
			<Pressable onPress={onGotoHome}>
				<LogoSvg width={getWidth(70)} height={getWidth(11)} />
			</Pressable>

			<AuthContainer>
				<ActiveThirdButton onPress={onGotoSignUp}>
					<SignUpText>新規登録</SignUpText>
				</ActiveThirdButton>

				<ActiveFourthButton onPress={onGotoSignin}>
					<SignUpText>Log in</SignUpText>
				</ActiveFourthButton>
			</AuthContainer>
		</AuthWrapper>
	)
}

const AuthWrapper = styled(View)(({ theme }) => ({
	flex: 1,
	display: "flex",
	alignItems: "center",
	flexDirection: "column",
	justifyContent: "space-around",
	padding: `${theme.globalSpacingX}px`,
	paddingBottom: getWidth(20),
}))

const AuthContainer = styled(View)(({ theme }) => ({
	gap: getWidth(6.5),
	display: "flex",
	flexDirection: "column",
	width: "100%",
	maxWidth: theme.getWidth(77),
}))

const SignUpText = styled(TextH4)({
	fontWeight: 800,
})

export { Auth }