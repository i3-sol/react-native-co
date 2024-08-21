import React from "react";
import { useState } from "react";
import styled from "styled-components/native";
import { StyleSheet, View } from "react-native";

import { routerConfig } from "../../router-config";
import { getWidth } from "../../theme/responsive";
import { BaseDivider } from "../../components/divider";
import { TextH5, TextH6 } from "../../components/typography";
import { ActiveSecondButton } from "../../components/button";
import { BaseTextInput } from "../../components/input/baseInput";
import { BaseTransparentButton } from "../../components/button/basebuttons";
import { AppleIconSvg, FacebookIconSvg, GoogleIconSvg } from "../../assets/image";
import { toastMessage } from "../../services/tostMessage";
import { apiNotification } from "../../services/apiNotification";
import { validateEmail } from "../../services/validator";
import { ValidateError } from "../../services/customError";
import { useGlobalContext } from "../../provider";
import { restApi } from "../../provider/restApi";

interface StatusObject {
	email: string
	password: string
	conf_password: string
	username: string
}

const initStatus: StatusObject = {
	email: "",
	password: "",
	conf_password: "",
	username: ""
}

const SignUp = ({ navigation }: ComPropsObject) => {
	const [, { dispatch }]: GlobalContextType = useGlobalContext();
	const [status, setStatus] = useState<StatusObject>(initStatus);

	const updateStatus = (data: Partial<StatusObject>) => {
		setStatus({ ...status, ...data })
	}

	const handleSignUp = async () => {
		try {
			if (!status.email) {
				throw new ValidateError("Please enter email!");
			} else if (!validateEmail(status.email)) {
				throw new ValidateError("Please enter valid email!");
			} else if (!status.password) {
				throw new ValidateError("Please enter password!");
			} else if (!status.conf_password) {
				throw new ValidateError("Please enter confirm password!");
			} else if (status.conf_password !== status.password) {
				throw new ValidateError("Password is not matched!");
			}

			dispatch({ type: "loading", payload: true });

			const resp = await restApi.sendRequest('auth/register/', status);

			if (!!resp) {
				console.log(resp.status)
				const res = await resp.json()
				console.log(res)

				if (resp.status === 400) {
					if ("email" in res) {
						throw new ValidateError(res['email']);
					} else if ("username" in res) {
						throw new ValidateError(res['username']);
					} else if ("password" in res) {
						throw new ValidateError(res['password'][0]);
					}
				} else if (resp.status === 201) {
					dispatch({ type: "loading", payload: false });
					toastMessage('success', 'User created successfully!')
					navigation.navigate(routerConfig.signin.name);
				}
			}

			dispatch({ type: "loading", payload: false });
			toastMessage("success", "Register successed");
		} catch (err: any) {
			console.log("handleLogin_err::", err.message);
			dispatch({ type: "loading", payload: false });
			apiNotification(err, "Register failed!");
		}
	}

	const goToSignIn = () => {
		navigation.navigate(routerConfig.signin.name);
	}

	return (
		<SignUpWrapper>
			<BaseItemContainer style={styles.formContainer}>
				<InputWrapper>
					<InputItemContainer>
						<TextH6>Email</TextH6>
						<TransparentTextInput value={status.email}
							onChangeText={(text: string) => { updateStatus({ email: text }) }}
						/>
					</InputItemContainer >

					<BaseDivider size={0.5} color="black" />

					<InputItemContainer>
						<TextH6 style={styles.inputText}>User Name</TextH6>
						<TransparentTextInput value={status.username}
							onChangeText={(text: string) => { updateStatus({ username: text }) }}
						/>
					</InputItemContainer>

					<BaseDivider size={0.5} color="black" />

					<InputItemContainer>
						<TextH6 style={styles.inputText}>Password</TextH6>
						<TransparentTextInput secureTextEntry={true}
							onChangeText={(text: string) => { updateStatus({ password: text }) }}
							value={status.password}
						/>
					</InputItemContainer >

					<BaseDivider size={0.5} color="black" />

					<InputItemContainer>
						<TextH6 style={styles.inputText}>Confirm</TextH6>
						<TransparentTextInput secureTextEntry={true}
							onChangeText={(text: string) => { updateStatus({ conf_password: text }) }}
							value={status.conf_password}
						/>
					</InputItemContainer >
				</InputWrapper >
			</BaseItemContainer >

			<BaseItemContainer>
				<ActiveSecondButton borderRadius={6} onPress={handleSignUp}>
					<TextH5 style={styles.loginText}>新規登録</TextH5>
				</ActiveSecondButton>
			</BaseItemContainer>

			<BaseDivider size={0.75} color="black" text="or" />

			<BaseItemContainer>
				<BaseTransparentButton borderRadius={6} onPress={goToSignIn}>
					<GoogleIconSvg width={getWidth(4.5)} height={getWidth(4.5)} />
					<TextH5 style={styles.baseText}>Continue with Google</TextH5>
				</BaseTransparentButton>

				<BaseTransparentButton borderRadius={6} onPress={goToSignIn}>
					<FacebookIconSvg width={getWidth(4.5)} height={getWidth(4.5)} />
					<TextH5 style={styles.baseText}>Continue with facebook</TextH5>
				</BaseTransparentButton>

				<BaseTransparentButton borderRadius={6} onPress={goToSignIn}>
					<AppleIconSvg width={getWidth(4.5)} height={getWidth(4.5)} />
					<TextH5 style={styles.baseText}>Continue with apple</TextH5>
				</BaseTransparentButton>
			</BaseItemContainer>
		</SignUpWrapper >
	)
}

const SignUpWrapper = styled(View)(({ theme }) => ({
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
	},
	inputText: {
		minWidth: getWidth(15),
	}
})

export { SignUp }