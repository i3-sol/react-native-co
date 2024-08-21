import React from "react";
import { useState } from "react";
import styled from "styled-components/native";
import { Pressable, StyleSheet, View } from "react-native";

import { routerConfig } from "../../router-config";
import { getHeight, getWidth } from "../../theme/responsive";
import { BaseDivider } from "../../components/divider";
import { TextH1, TextH2, TextH3, TextH4, TextH5, TextH6 } from "../../components/typography";
import { ActiveFirstButton, ActiveSecondButton } from "../../components/button";
import { BaseTextInput } from "../../components/input/baseInput";
import { BaseTransparentButton } from "../../components/button/basebuttons";
import { AppleIconSvg, FacebookIconSvg, GoogleIconSvg } from "../../assets/image";
import { toastMessage } from "../../services/tostMessage";
import { apiNotification } from "../../services/apiNotification";
import { validateEmail } from "../../services/validator";
import { ValidateError } from "../../services/customError";
import { useGlobalContext } from "../../provider";
import { restApi } from "../../provider/restApi";
import { Text } from "react-native-svg";
import { FormPressable } from "../../components/input/checkbox";

interface StatusObject {
	email: string
}

const SignUp = ({ navigation }: ComPropsObject) => {
	const [, { dispatch }]: GlobalContextType = useGlobalContext();
	const [status, setStatus] = useState({} as StatusObject);
	const [idx, setIdx] = React.useState(0);
	const [agreeStatus, setAgreeStatues] = React.useState({
		isOver18: false,
		isAgree: false
	})
	const updateStatus = (data: Partial<StatusObject>) => {
		setStatus({ ...status, ...data })
	}

	const goToPersonSignIn = () => {
		if (!agreeStatus.isAgree || !agreeStatus.isOver18) {
			return toastMessage("error", "You must agree to the Terms of Use.");
		}
		navigation.navigate(routerConfig.personalSignup.name);
	}

	const goToStoreSignIn = () => {
		if (!agreeStatus.isAgree || !agreeStatus.isOver18) {
			return toastMessage("error", "You must agree to the Terms of Use.");
		}
		navigation.navigate(routerConfig.storeSignup.name);
	}

	const sendEmail = () => {
		if (!validateEmail(status.email))
			return toastMessage("error", "Please enter valid email!");
		setIdx(1)
	}

	return (
		<SignUpWrapper>
			{idx === 0 && (
				<BaseItemContainer style={styles.formContainer}>
					<InputWrapper>
						<InputItemContainer>
							<TransparentTextInput value={status.email}
								onChangeText={(text: string) => { updateStatus({ email: text }) }}
								placeholder="メールアドレス登録"
							/>
						</InputItemContainer >
					</InputWrapper >

					<BaseTransparentButton borderRadius={6} onPress={sendEmail}>
						<TextH5 style={styles.loginText}>続ける</TextH5>
					</BaseTransparentButton>
				</BaseItemContainer >
			)}

			{idx === 1 && (
				<BaseItemContainer style={styles.formContainer}>
					<TextH2 style={styles.title}>リアコネ</TextH2>
					<TextH2 style={styles.desc}>リアコネを安全にご利用いただくために利用規約に同意お願いします。</TextH2>

					<CheckWrapper>
						<CheckOutView>
							<TextH3 style={styles.checkoutText} >18歳以上ですか</TextH3 >
							<FormPressable hitSlop={1} onPress={() => setAgreeStatues({ ...agreeStatus, isOver18: !agreeStatus.isOver18 })}>
								<TextH3 style={styles.checkoutText} >はい</TextH3 >
								<CheckBoxDotView>
									<CheckBoxDot style={{ backgroundColor: agreeStatus.isOver18 ? 'black' : 'transparent' }} />
								</CheckBoxDotView>
							</FormPressable>
						</CheckOutView>

						<CheckOutView>
							<TextH3 style={styles.checkoutText} >利用規約</TextH3 >
							<FormPressable hitSlop={20} onPress={() => setAgreeStatues({ ...agreeStatus, isAgree: !agreeStatus.isAgree })}>
								<TextH3 style={styles.checkoutText} >同意</TextH3 >
								<CheckBoxDotView>
									<CheckBoxDot style={{ backgroundColor: agreeStatus.isAgree ? 'black' : 'transparent' }} />
								</CheckBoxDotView>
							</FormPressable>
						</CheckOutView>
					</CheckWrapper>

					<BaseTransparentButton borderColor="red" borderRadius={6} onPress={goToPersonSignIn}>
						<TextH5 style={styles.loginText}>同意して登録に進む</TextH5>
					</BaseTransparentButton>
					<TextH2 style={styles.desc}>こちらから店舗の権限が付いたユーザーを作成できます。</TextH2>
					<BaseTransparentButton borderColor="red" borderRadius={6} onPress={goToStoreSignIn}>
						<TextH5 style={styles.loginText}>店舗の方はこちらから</TextH5>
					</BaseTransparentButton>
				</BaseItemContainer>
			)}
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
	gap: getHeight(5),
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

const CheckWrapper = styled(View)({
	display: "flex",
	flexDirection: "column",
	gap: getHeight(2)
});

const CheckOutView = styled(View)({
	display: "flex",
	flexDirection: "row",
	justifyContent: 'space-between'
});
const CheckBoxDotView = styled(View)({
	height: getWidth(5),
	width: getWidth(5),
	borderRadius: 50,
	borderWidth: 1,
	borderColor: "#000",
	justifyContent: 'center',
	alignItems: 'center',
	alignSelf: 'center',
});

const CheckBoxDot = styled(View)({
	height: getWidth(3),
	width: getWidth(3),
	borderRadius: 10,
});
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
	},
	title: {
		textAlign: 'center',
		fontSize: getWidth(4.5),
		fontWeight: '800',
	},
	desc: {
		textAlign: 'center',
		fontSize: getWidth(3.5),
		fontWeight: '600',
		lineHeight: 20
	},
	checkoutText: {
		fontWeight: 400,
		fontSize: getWidth(4)
	}
})

export { SignUp }