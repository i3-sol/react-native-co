import React from "react";
import { useState } from "react";
import styled from "styled-components/native";
import { Image, Pressable, StyleSheet, View } from "react-native";
import { ImageLibraryOptions, MediaType, launchImageLibrary } from "react-native-image-picker";

import { routerConfig } from "../../router-config";
import { getHeight, getWidth } from "../../theme/responsive";
import { TextH2, TextH3, TextH4, TextH5 } from "../../components/typography";
import { BaseTextInput } from "../../components/input/baseInput";
import { BaseTransparentButton } from "../../components/button/basebuttons";
import { toastMessage } from "../../services/tostMessage";
import { apiNotification } from "../../services/apiNotification";
import { useGlobalContext } from "../../provider";
import { restApi } from "../../provider/restApi";
import { cancelIcon } from "../../assets/image";

interface StatusObject {
	shop_email: string
	// password: string
	// conf_password: string
	full_name: string
	genre: string
	// date_of_birth: string
	address: string
	shop_address: string
	icon: string
	photograph: string
	nickname: string
	// sex: string
	// year: string
	// prefecture_name: string
	// occupation: string
	self_information: string
	// height: string
	// body_type: string
	// married: string
	// highest_level_of_education: string
	// school_name: string
	// annual_income: string
	telephone_number: string
	store_link: string
}

const StoreSignUp = ({ navigation }: ComPropsObject) => {
	const [state, { dispatch }]: GlobalContextType = useGlobalContext();
	const [status, setStatus] = useState({
		shop_email: "",
		// password: "",
		// conf_password: "",
		full_name: "",
		genre: "",
		// date_of_birth: "",
		address: "",
		shop_address: "",
		icon: "",
		photograph: "",
		// nickname: "",
		// sex: "",
		// year: "",
		// prefecture_name: "",
		// occupation: "",
		self_information: "",
		// height: "",
		// body_type: "",
		// married: "",
		// highest_level_of_education: "",
		// school_name: "",
		// annual_income: "",
		telephone_number: "",
		store_link: ""
	} as StatusObject);
	const [idx, setIdx] = React.useState(0);
	const updateStatus = (data: Partial<StatusObject>) => {
		setStatus({ ...status, ...data })
	}

	const onStoreSignUp = async () => {
		try {

			const formData = new FormData();
			const fields: (keyof StatusObject)[] = ['full_name', 'store_link', 'address', 'nickname', 'telephone_number', 'shop_address', 'self_information', 'shop_email',];

			formData.append('email', state.userEmail)
			fields.forEach(field => {
				formData.append(field, status[field]);
			});

			if (!!status.icon && status.icon.includes('data:image/png;base64,')) {

				formData.append('image', {
					uri: status.icon,
					name: "image.png",
					type: "image/png"
				});
			} else {
				formData.append('image', status.icon)
			}

			if (!!status.photograph && status.photograph.includes('data:image/png;base64,')) {

				formData.append('image', {
					uri: status.photograph,
					name: "image.png",
					type: "image/png"
				});
			} else {
				formData.append('image', status.photograph)
			}

			dispatch({ type: "loading", payload: true });

			const resp = await restApi.sendRequest('auth/register/', status);

			if (!!resp) {
				console.log(resp.status)
				const res = await resp.json()
				console.log(res)
			}

			dispatch({ type: "loading", payload: false });
			toastMessage("success", "Register successed");
			setIdx(11)
		} catch (err: any) {
			console.log("handleLogin_err::", err.message);
			dispatch({ type: "loading", payload: false });
			apiNotification(err, "Register failed!");
		}
	}

	const onNext = (idx: number, value?: string, key?: string) => {
		console.log("value", value)
		if (value === "") {
			return toastMessage("error", "This field is required!")
		}
		if (key === 'shop_email' && (status.shop_email === "" || status.shop_address) === "") {
			return toastMessage("error", "This field is required!")
		}
		if (key === 'self_information' && value && value.length < 20) {
			return toastMessage("error", "This field must be at least 50 characters long.")
		}
		setIdx(idx);
	}


	const onChooseImage = (key: string) => {
		const options: ImageLibraryOptions = {
			mediaType: 'photo' as MediaType,
			selectionLimit: 1,
			includeBase64: true
		}

		launchImageLibrary(options, (response) => {
			if (response.didCancel) {
				console.log('User cancelled image picker');
			} else if (response.errorCode) {
				console.log('ImagePicker Error: ', response.errorCode);
			} else if (response.errorMessage) {
				console.log('ImagePicker Error: ', response.errorMessage);
			} else if (response.assets && response.assets.length > 0) {
				const asset = response.assets[0];
				const base64String = asset.base64 ?? '';
				setStatus({ ...status, [key]: `data:image/png;base64,${base64String}` })
			} else {
				console.log('No assets found');
			}
		})
	}

	return (
		<StoreSignUpWrapper>
			{idx === 0 && (
				<BaseItemContainer style={styles.formContainer}>
					<TextH4 style={styles.title}></TextH4>
					<FormView>
						<TextH2 style={styles.title}>店舗でのご利用</TextH2>
						<TextH2 style={styles.title}>ありがとうございます。</TextH2>
					</FormView>

					<BaseTransparentButton borderColor="red" borderRadius={6} onPress={() => setIdx(1)}>
						<TextH5 style={styles.loginText}>次へ</TextH5>
					</BaseTransparentButton>
				</BaseItemContainer >
			)}
			{idx === 1 && (
				<BaseItemContainer style={styles.formContainer}>
					<TextH4 style={styles.title}></TextH4>
					<FormView>
						<TextH2 style={styles.title}>リアコネでは店舗の利用によって店舗でイベントを開催でき、</TextH2>
						<TextH2 style={styles.title}>合流の店舗としても登録できます。</TextH2>
					</FormView>

					<BaseTransparentButton borderColor="red" borderRadius={6} onPress={() => setIdx(2)}>
						<TextH5 style={styles.loginText}>次へ</TextH5>
					</BaseTransparentButton>
				</BaseItemContainer >
			)}
			{idx === 2 && (
				<BaseItemContainer style={styles.formContainer}>
					<StepWrapper>
						<TextH4 style={styles.title}>1/3</TextH4>
					</StepWrapper>
					<FormView>
						<TextH2 style={styles.title}>あなたの店舗の名前を</TextH2>
						<TextH2 style={styles.title}>教えてください。</TextH2>

						<InputWrapper>
							<InputItemContainer>
								<TransparentTextInput value={status.full_name}
									onChangeText={(text: string) => { updateStatus({ full_name: text }) }}
									placeholder="名前入力"
								/>
							</InputItemContainer >
						</InputWrapper >
					</FormView>

					<BaseTransparentButton borderColor="red" borderRadius={6} onPress={() => onNext(3, status.full_name)}>
						<TextH5 style={styles.loginText}>次へ</TextH5>
					</BaseTransparentButton>
				</BaseItemContainer >
			)}
			{idx === 3 && (
				<BaseItemContainer style={styles.formContainer}>
					<StepWrapper>
						<TextH4 style={styles.title}>2/3</TextH4>
					</StepWrapper>
					<FormView>
						<TextH2 style={styles.title}>あなたの店舗のジャ</TextH2>
						<TextH2 style={styles.title}>ンルを教えてください。</TextH2>

						<InputWrapper>
							<InputItemContainer>
								<TransparentTextInput value={status.genre}
									onChangeText={(text: string) => { updateStatus({ genre: text }) }}
									placeholder="ジャンルダイアル式"
								/>
							</InputItemContainer >
						</InputWrapper >
					</FormView>

					<BaseTransparentButton borderColor="red" borderRadius={6} onPress={() => onNext(4, status.genre)}>
						<TextH5 style={styles.loginText}>次へ</TextH5>
					</BaseTransparentButton>
				</BaseItemContainer >
			)}
			{idx === 4 && (
				<BaseItemContainer style={styles.formContainer}>
					<StepWrapper>
						<TextH4 style={styles.title}>3/3</TextH4>
					</StepWrapper>
					<FormView>
						<TextH2 style={styles.title}>あなたの店舗の住所を市町まで選択</TextH2>
						<TextH2 style={styles.title}>して下さい。</TextH2>

						<InputWrapper>
							<InputItemContainer>
								<TransparentTextInput value={status.address}
									onChangeText={(text: string) => { updateStatus({ address: text }) }}
									placeholder="市町村選択"
								/>
							</InputItemContainer >
						</InputWrapper >
					</FormView>

					<BaseTransparentButton borderColor="red" borderRadius={6} onPress={() => onNext(5, status.address)}>
						<TextH5 style={styles.loginText}>次へ</TextH5>
					</BaseTransparentButton>
				</BaseItemContainer >
			)}
			{idx === 5 && (
				<BaseItemContainer style={styles.formContainer}>
					<TextH2 style={styles.title}></TextH2>
					<FormView>
						<TextH2 style={styles.title}>ご入力ありがとうございます。</TextH2>
						<TextH2 style={styles.title}>もう少しあなた店舗について教えてください。</TextH2>
					</FormView>
					<BaseTransparentButton borderColor="red" borderRadius={6} onPress={() => setIdx(6)}>
						<TextH5 style={styles.loginText}>次へ</TextH5>
					</BaseTransparentButton>
				</BaseItemContainer >
			)}
			{idx === 6 && (
				<BaseItemContainer style={styles.formContainer}>
					<StepWrapper>
						<TextH4 style={styles.title}>1/5</TextH4>
					</StepWrapper>
					<FormView style={{ gap: getHeight(5) }}>
						<View>
							<TextH2 style={styles.title}>店舗の住所、電話番号、</TextH2>
							<TextH2 style={styles.title}>メールアドレスを教えてください</TextH2>
						</View>
						<View>
							<InputWrapper>
								<InputItemContainer>
									<TransparentTextInput value={status.shop_address}
										onChangeText={(text: string) => { updateStatus({ shop_address: text }) }}
										placeholder="住所"
									/>
								</InputItemContainer >
							</InputWrapper >
							<InputWrapper>
								<InputItemContainer>
									<TransparentTextInput value={status.telephone_number}
										onChangeText={(text: string) => { updateStatus({ telephone_number: text }) }}
										placeholder="電話番号"
									/>
								</InputItemContainer >
							</InputWrapper >
							<InputWrapper>
								<InputItemContainer>
									<TransparentTextInput value={status.shop_email}
										onChangeText={(text: string) => { updateStatus({ shop_email: text }) }}
										placeholder="メールアドレス"
									/>
								</InputItemContainer >
							</InputWrapper >
						</View>
					</FormView>
					<BaseTransparentButton borderColor="red" borderRadius={6} onPress={() => onNext(7, status.telephone_number, 'shop_email')}>
						<TextH5 style={styles.loginText}>次へ</TextH5>
					</BaseTransparentButton>
				</BaseItemContainer >
			)}
			{idx === 7 && (
				<BaseItemContainer style={styles.formContainer}>
					<StepWrapper>
						<TextH4 style={styles.title}>2/5</TextH4>
					</StepWrapper>
					<FormView style={{ gap: getHeight(5) }}>
						<View>
							<TextH2 style={styles.title}>地域を指す通称（～支</TextH2>
							<TextH2 style={styles.title}>店や～店等）や、お店</TextH2>
							<TextH2 style={styles.title}>のリンクがあれば教え</TextH2>
							<TextH2 style={styles.title}>てください。</TextH2>
						</View>
						<View>
							<InputWrapper>
								<InputItemContainer>
									<TransparentTextInput value={status.nickname}
										onChangeText={(text: string) => { updateStatus({ nickname: text }) }}
										placeholder="地域を指す通称"
									/>
								</InputItemContainer >
							</InputWrapper >
							<InputWrapper>
								<InputItemContainer>
									<TransparentTextInput value={status.store_link}
										onChangeText={(text: string) => { updateStatus({ store_link: text }) }}
										placeholder="お店のリンク"
									/>
								</InputItemContainer >
							</InputWrapper >
						</View>
					</FormView>
					<BaseTransparentButton borderColor="red" borderRadius={6} onPress={() => onNext(8, status.nickname)}>
						<TextH5 style={styles.loginText}>次へ</TextH5>
					</BaseTransparentButton>
				</BaseItemContainer >
			)}
			{idx === 8 && (
				<BaseItemContainer style={styles.formContainer}>
					<StepWrapper>
						<TextH4 style={styles.title}>3/5</TextH4>
					</StepWrapper>
					<FormView style={{ gap: getHeight(5) }}>
						<View>
							<TextH2 style={styles.title}>店舗の紹介文をお願いしますこの文は店舗選択の際に表示されます。</TextH2>
						</View>
						<InputWrapper>
							<InputItemContainer>
								<TransparentTextInput value={status.self_information}
									onChangeText={(text: string) => { updateStatus({ self_information: text }) }}
									placeholder="入力フォーム"
								/>
							</InputItemContainer >

						</InputWrapper >
					</FormView>
					<BaseTransparentButton borderColor="red" borderRadius={6} onPress={() => onNext(9, status.self_information, 'self_information')}>
						<TextH5 style={styles.loginText}>次へ</TextH5>
					</BaseTransparentButton>
				</BaseItemContainer >
			)}
			{idx === 9 && (
				<BaseItemContainer style={styles.formContainer}>
					<StepWrapper>
						<TextH4 style={styles.title}>4/5</TextH4>
					</StepWrapper>
					<View style={{ gap: getHeight(2) }}>
						<View style={{ paddingBottom: getHeight(7) }}>
							<TextH2 style={styles.title}>アイコン画像を</TextH2>
							<TextH2 style={styles.title}>選択して下さい。</TextH2>
						</View>
						<InputWrapper style={{ borderColor: 'transparent', alignItems: "center" }}>
							{!status.icon ? (
								<Pressable onPress={() => onChooseImage('icon')}><AvatarImage><TextH3>画像</TextH3></AvatarImage></Pressable>
							) : (
								<View>
									<Image style={styles.avatarImg} source={{ uri: status.icon }} />
									<Pressable
										style={{ position: 'absolute', right: getWidth(0), top: getWidth(0), backgroundColor: 'lightgray', padding: getWidth(2), borderRadius: getWidth(100), }}
										onPress={() => setStatus({ ...status, icon: '' })}>
										<Image style={{ width: getWidth(2), height: getWidth(2) }} source={cancelIcon} />
									</Pressable>
								</View>

							)}
						</InputWrapper >
					</View>
					<BaseTransparentButton borderColor="red" borderRadius={6} onPress={() => onNext(10, status.icon)}>
						<TextH5 style={styles.loginText}>次へ</TextH5>
					</BaseTransparentButton>
				</BaseItemContainer >
			)}
			{idx === 10 && (
				<BaseItemContainer style={styles.formContainer}>
					<StepWrapper>
						<TextH4 style={styles.title}>5/5</TextH4>
					</StepWrapper>
					<View style={{ gap: getHeight(2) }}>
						<View style={{ paddingBottom: getHeight(7) }}>
							<TextH2 style={styles.title}>最後に店舗画像を</TextH2>
							<TextH2 style={styles.title}>選択して下さい。</TextH2>
							<TextH2 style={styles.title}>（5枚まで選択可能）</TextH2>

						</View>
						<InputWrapper style={{ borderColor: 'transparent', alignItems: "center" }}>
							{!status.photograph ? (
								<Pressable onPress={() => onChooseImage('photograph')}><PhotographImage><TextH3>画像</TextH3></PhotographImage></Pressable>
							) : (
								<View>
									<Image style={styles.photographImg} source={{ uri: status.photograph }} />

									<Pressable
										style={{ position: 'absolute', right: getWidth(-2), top: getWidth(-2), backgroundColor: 'lightgray', padding: getWidth(2), borderRadius: getWidth(100), }}
										onPress={() => setStatus({ ...status, photograph: '' })}>
										<Image style={{ width: getWidth(2), height: getWidth(2) }} source={cancelIcon} />
									</Pressable>
								</View>

							)}
						</InputWrapper >
						
					</View>
					<BaseTransparentButton borderColor="red" borderRadius={6} onPress={onStoreSignUp}>
						<TextH5 style={styles.loginText}>完了</TextH5>
					</BaseTransparentButton>
				</BaseItemContainer >
			)}
			{idx === 11 && (
				<BaseItemContainer style={styles.formContainer}>
					<TextH2 style={styles.title}></TextH2>
					<FormView>
						<TextH2 style={styles.title}>次に店舗権限が付与されるユー</TextH2>
						<TextH2 style={styles.title}>ザーの登録をお願いします</TextH2>
					</FormView>
					<BaseTransparentButton borderColor="red" borderRadius={6} onPress={() => navigation.navigate(routerConfig.signin.name)}>
						<TextH5 style={styles.loginText}>ログイン</TextH5>
					</BaseTransparentButton>
				</BaseItemContainer >
			)}
		</StoreSignUpWrapper >
	)
}

const StoreSignUpWrapper = styled(View)(({ theme }) => ({
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
	height: "85%",
	display: "flex",
	flexDirection: "column",
	justifyContent: "space-between"
})

const FormView = styled(View)(({ theme }) => ({
	gap: getHeight(1),
	marginBottom: getHeight(15)
}))

const InputWrapper = styled(View)(({ theme }) => ({
	borderRadius: 6,
	marginTop: getHeight(2),
	border: `0.75px solid ${theme.green}`,
}))

const StepWrapper = styled(View)(({ theme }) => ({
	borderRadius: 6,
	marginBottom: (2),
	padding: getWidth(3),
	marginLeft: getWidth(10),
	marginRight: getWidth(10),
	border: `0.75px solid ${theme.green}`,
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

const PhotographImage = styled(View)({
	width: getWidth(60),
	height: getWidth(50),
	borderWidth: 1,
	borderColor: 'gray',
	display: "flex",
	alignItems: "center",
	justifyContent: "center"
});

const AvatarImage = styled(View)({
	width: getWidth(60),
	height: getWidth(50),
	borderRadius: 20,
	borderWidth: 1,
	borderColor: 'gray',
	display: "flex",
	alignItems: "center",
	justifyContent: "center"
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
	avatarImg: {
		width: getWidth(60),
		height: getWidth(50),
		borderRadius: 20
	},
	photographImg: {
		width: getWidth(60),
		height: getWidth(50),
	},
	loginText: {
		fontWeight: 700,
	},
	title: {
		textAlign: 'center',
		fontSize: getWidth(4.5),
		fontWeight: '500',
	},
})

export { StoreSignUp }