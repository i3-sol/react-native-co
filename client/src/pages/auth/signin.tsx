import React, { useState } from "react";
import styled from "styled-components/native";
import { Pressable, StyleSheet, View } from "react-native";

import { routerConfig } from "../../router-config";
import { getWidth } from "../../theme/responsive";
import { BaseDivider } from "../../components/divider";
import { ActiveSecondButton } from "../../components/button";
import { BaseTextInput } from "../../components/input/baseInput";
import { TextActive1H5, TextH5, TextH6 } from "../../components/typography";
import { BaseTransparentButton } from "../../components/button/basebuttons";
import { AppleIconSvg, FacebookIconSvg, GoogleIconSvg } from "../../assets/image";
import { apiNotification } from "../../services/apiNotification";
import { ValidateError } from "../../services/customError";
import { validateEmail } from "../../services/validator";
import { toastMessage } from "../../services/tostMessage";
import { useGlobalContext } from "../../provider";
import { restApi } from "../../provider/restApi";

interface StatusObject {
	username: string
	password: string
}

const initStatus: StatusObject = {
	username: "",
	password: "",
}

const SignIn = ({ navigation }: ComPropsObject) => {
	const [, { dispatch }]: GlobalContextType = useGlobalContext();
	const [status, setStatus] = useState<StatusObject>(initStatus);

	const updateStatus = (data: Partial<StatusObject>) => {
		setStatus({ ...status, ...data })
	}

	const handleLogin = async () => {
		try {
			if (!status.username) {
				throw new ValidateError("Please enter username!");
			} else if (!status.password) {
				throw new ValidateError("Please enter password!");
			}

			dispatch({ type: "loading", payload: true });
			const resp = await restApi.sendRequest('auth/login/', status);

			if (!!resp && resp.status === 400) {
				throw new ValidateError("この項目は必須です。");
			} else if (!!resp && resp.status === 401) {
				throw new ValidateError("No active account found with the given credentials");
			} else if (!!resp && resp.status > 500) {
				new ValidateError("この項目は必須です。");
			}

			updateStatus({ username: '', password: '' })
			navigation.navigate(routerConfig.home.name);

			toastMessage("success", "Login successed");
			dispatch({ type: "loading", payload: false });
		} catch (err: any) {
			console.log("handleLogin_err::", err.message);
			dispatch({ type: "loading", payload: false });
			apiNotification(err, "Sign in failed!");
		}
	}

	const goToSignUp = () => {
		navigation.navigate(routerConfig.signup.name);
	}

	return (
		<SignInWrapper>
			<BaseItemContainer style={styles.formContainer}>
				<InputWrapper>
					<InputItemContainer>
						<TextH6>User Name</TextH6>
						<TransparentTextInput value={status.username}
							onChangeText={(text: string) => { updateStatus({ username: text }) }}
						/>
					</InputItemContainer>

					<BaseDivider size={0.75} color="black" />

					<InputItemContainer>
						<TextH6>Password</TextH6>
						<TransparentTextInput secureTextEntry={true}
							onChangeText={(text: string) => { updateStatus({ password: text }) }}
							value={status.password}
						/>
					</InputItemContainer>
				</InputWrapper>

				<Pressable onPress={goToSignUp}>
					<TextActive1H5 style={styles.forgotPasswordText}>
						Forgot password?
					</TextActive1H5>
				</Pressable>
			</BaseItemContainer>

			<BaseItemContainer>
				<ActiveSecondButton borderRadius={6} onPress={handleLogin}>
					<TextH5 style={styles.loginText}>Log in</TextH5>
				</ActiveSecondButton>
			</BaseItemContainer>

			<BaseDivider size={0.75} color="black" text="or" />

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
		</SignInWrapper>
	)
}

const SignInWrapper = styled(View)(({ theme }) => ({
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

const InputWrapper = styled(View)(({ theme }) => ({
	borderRadius: 6,
	marginBottom: (2),
	border: `0.75px solid ${theme.black}`,
}))

const InputItemContainer = styled(View)({
	display: "flex",
	flexDirection: "row",
	alignItems: "start",
	padding: `${getWidth(1.8)}px ${getWidth(3.6)}px`,
})

const TransparentTextInput = styled(BaseTextInput)({
	height: getWidth(7.4)
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
	}
})

export { SignIn }