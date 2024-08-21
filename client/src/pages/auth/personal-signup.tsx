import React from "react";
import { useState } from "react";
import styled from "styled-components/native";
import { Pressable, Image, StyleSheet, View, Text } from "react-native";
import { ImageLibraryOptions, MediaType, launchImageLibrary } from "react-native-image-picker";
import moment from "moment";

import { routerConfig } from "../../router-config";
import { getHeight, getWidth } from "../../theme/responsive";
import { TextH2, TextH3, TextH4, TextH5 } from "../../components/typography";
import DatePicker from '../../components/date-picker';
import Select from '../../components/select';
import { BaseTextInput } from "../../components/input/baseInput";
import { BaseTransparentButton } from "../../components/button/basebuttons";
import { toastMessage } from "../../services/tostMessage";
import { apiNotification } from "../../services/apiNotification";
import { useGlobalContext } from "../../provider";
import { cancelIcon } from "../../assets/image";
import { restApi } from "../../provider/restApi";

interface StatusObject {
	// email: string
	// password: string
	// conf_password: string
	full_name: string
	date_of_birth: string
	address: string
	icon: string
	photograph: string
	nickname: string
	sex: string
	// year: string
	// prefecture_name: string
	occupation: string
	self_information: string
	height: string
	// body_type: string
	// married: string
	// highest_level_of_education: string
	// school_name: string
	// annual_income: string
	// telephone_number: string
}

const PersonalSignUp = ({ navigation }: ComPropsObject) => {
	const [state, { dispatch }]: GlobalContextType = useGlobalContext();
	const [status, setStatus] = useState({
		// email: "",
		// password: "",
		// conf_password: "",
		full_name: "",
		date_of_birth: "",
		address: "",
		icon: "",
		photograph: "",
		nickname: "",
		sex: "",
		// year: "",
		// prefecture_name: "",
		occupation: "",
		self_information: "",
		height: "",
		// body_type: "",
		// married: "",
		// highest_level_of_education: "",
		// school_name: "",
		// annual_income: "",
		// telephone_number: "",
	} as StatusObject);
	const [idx, setIdx] = React.useState(0);

	const updateStatus = (data: Partial<StatusObject>) => {
		setStatus({ ...status, ...data })
	}
	const onChangeDate = (date: Date, key: string) => {
		setStatus({ ...status, [key]: moment(date).format('YYYY.DD.MM') })
	}

	const onSelect = (value: string) => {
		setStatus({ ...status, sex: value })
	}

	const handlePersonalSignUp = async () => {
		try {
			const formData = new FormData();
			const fields: (keyof StatusObject)[] = ['full_name', 'date_of_birth', 'address', 'nickname', 'sex', 'occupation', 'self_information','height',];
			
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
			// toastMessage("success", "Register successed");

			setIdx(10)
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
		<PersonalSignUpWrapper>
			{idx === 0 && (
				<BaseItemContainer style={styles.formContainer}>
					<StepWrapper>
						<TextH4 style={styles.title}>1/4</TextH4>
					</StepWrapper>
					<FormView>
						<TextH2 style={styles.title}>生年月日</TextH2>
						<TextH2 style={styles.desc}>※生年月日は後で変更できません</TextH2>

						<InputWrapper>
							<InputItemContainer>
								<DatePicker
									placeholder='カレンダー'
									k="date_of_birth"
									value={status.date_of_birth}
									onChangeDate={onChangeDate}
								/>
							</InputItemContainer >
						</InputWrapper >
					</FormView>

					<BaseTransparentButton borderColor="red" borderRadius={6} onPress={() => onNext(1, status.date_of_birth)}>
						<TextH5 style={styles.loginText}>次へ</TextH5>
					</BaseTransparentButton>
				</BaseItemContainer >
			)}

			{idx === 1 && (
				<BaseItemContainer style={styles.formContainer}>
					<StepWrapper>
						<TextH4 style={styles.title}>2/4</TextH4>
					</StepWrapper>
					<FormView>
						<TextH2 style={styles.title}>性別</TextH2>
						<TextH2 style={styles.desc}>※性別は後で変更できません</TextH2>

						<InputWrapper>
							<Select
								value={status.sex}
								values={[
									{ label: '男性', value: '男性' },
									{ label: '女性', value: '女性' },
									{ label: 'その他', value: 'その他' },
								]}
								onSelect={onSelect}
							/>
						</InputWrapper >
					</FormView>

					<BaseTransparentButton borderColor="red" borderRadius={6} onPress={() => onNext(2, status.sex)}>
						<TextH5 style={styles.loginText}>次へ</TextH5>
					</BaseTransparentButton>
				</BaseItemContainer >
			)}
			{idx === 2 && (
				<BaseItemContainer style={styles.formContainer}>
					<StepWrapper>
						<TextH4 style={styles.title}>3/4</TextH4>
					</StepWrapper>
					<FormView>
						<TextH2 style={styles.title}>ニックネーム</TextH2>

						<InputWrapper>
							<InputItemContainer>
								<TransparentTextInput value={status.nickname}
									onChangeText={(text: string) => { updateStatus({ nickname: text }) }}
									placeholder="入力フォーム"
								/>
							</InputItemContainer >
						</InputWrapper >
					</FormView>

					<BaseTransparentButton borderColor="red" borderRadius={6} onPress={() => onNext(3, status.nickname)}>
						<TextH5 style={styles.loginText}>次へ</TextH5>
					</BaseTransparentButton>
				</BaseItemContainer >
			)}
			{idx === 3 && (
				<BaseItemContainer style={styles.formContainer}>
					<StepWrapper>
						<TextH4 style={styles.title}>4/4</TextH4>
					</StepWrapper>
					<FormView>
						<TextH2 style={styles.title}>都道府県</TextH2>

						<InputWrapper>
							<InputItemContainer>
								<TransparentTextInput value={status.address}
									onChangeText={(text: string) => { updateStatus({ address: text }) }}
									placeholder="都道府県"
								/>
							</InputItemContainer >
						</InputWrapper >
					</FormView>

					<BaseTransparentButton borderColor="red" borderRadius={6} onPress={() => onNext(4, status.address)}>
						<TextH5 style={styles.loginText}>次へ</TextH5>
					</BaseTransparentButton>
				</BaseItemContainer >
			)}
			{idx === 4 && (
				<BaseItemContainer style={styles.formContainer}>
					<TextH2 style={styles.title}></TextH2>
					<FormView>
						<TextH2 style={styles.title}>ご入力ありがとうございます。</TextH2>
						<TextH2 style={styles.title}>次はあなたのことを教えてください。</TextH2>
					</FormView>
					<BaseTransparentButton borderColor="red" borderRadius={6} onPress={() => setIdx(5)}>
						<TextH5 style={styles.loginText}>次へ</TextH5>
					</BaseTransparentButton>
				</BaseItemContainer >
			)}
			{idx === 5 && (
				<BaseItemContainer style={styles.formContainer}>
					<StepWrapper>
						<TextH4 style={styles.title}>1/5</TextH4>
					</StepWrapper>
					<FormView style={{ gap: getHeight(5) }}>
						<View>
							<TextH2 style={styles.title}>普段どんなお仕事を</TextH2>
							<TextH2 style={styles.title}>されていますか？</TextH2>
						</View>
						<InputWrapper>
							<InputItemContainer>
								<TransparentTextInput value={status.occupation}
									onChangeText={(text: string) => { updateStatus({ occupation: text }) }}
									placeholder="職業ダイアル式"
								/>
							</InputItemContainer >
						</InputWrapper >
					</FormView>
					<BaseTransparentButton borderColor="red" borderRadius={6} onPress={() => onNext(6, status.occupation)}>
						<TextH5 style={styles.loginText}>次へ</TextH5>
					</BaseTransparentButton>
				</BaseItemContainer >
			)}
			{idx === 6 && (
				<BaseItemContainer style={styles.formContainer}>
					<StepWrapper>
						<TextH4 style={styles.title}>2/5</TextH4>
					</StepWrapper>
					<FormView style={{ gap: getHeight(5) }}>
						<View>
							<TextH2 style={styles.title}>身長はどれくらいですか？</TextH2>
						</View>
						<InputWrapper>
							<InputItemContainer>
								<TransparentTextInput value={status.height}
									onChangeText={(text: string) => { updateStatus({ height: text }) }}
									placeholder="職業ダイアル式"
								/>
							</InputItemContainer >
						</InputWrapper >
					</FormView>
					<BaseTransparentButton borderColor="red" borderRadius={6} onPress={() => onNext(7)}>
						<TextH5 style={styles.loginText}>次へ</TextH5>
					</BaseTransparentButton>
				</BaseItemContainer >
			)}
			{idx === 7 && (
				<BaseItemContainer style={styles.formContainer}>
					<StepWrapper>
						<TextH4 style={styles.title}>3/5</TextH4>
					</StepWrapper>
					<FormView style={{ gap: getHeight(5) }}>
						<View>
							<TextH2 style={styles.title}>簡単に自己紹介文を</TextH2>
							<TextH2 style={styles.title}>お願いします</TextH2>
						</View>
						<InputWrapper>
							<InputItemContainer>
								<TransparentTextInput value={status.self_information}
									onChangeText={(text: string) => { updateStatus({ self_information: text }) }}
									placeholder="入力フォーム"
								/>
							</InputItemContainer >

						</InputWrapper >
						<TextH2 style={styles.title}>例）初めまして。新しい友達を作りたくて始めました。よろしくお願いします。</TextH2>
					</FormView>
					<BaseTransparentButton borderColor="red" borderRadius={6} onPress={() => onNext(8, status.self_information, 'self_information')}>
						<TextH5 style={styles.loginText}>次へ</TextH5>
					</BaseTransparentButton>
				</BaseItemContainer >
			)}
			{idx === 8 && (
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
						<View>
							<TextH2 style={styles.title}>顔写真を登録すると</TextH2>
							<TextH2 style={styles.title}>信頼性が向上します。</TextH2>
						</View>
					</View>
					<BaseTransparentButton borderColor="red" borderRadius={6} onPress={() => onNext(9, status.icon)}>
						<TextH5 style={styles.loginText}>次へ</TextH5>
					</BaseTransparentButton>
				</BaseItemContainer >
			)}
			{idx === 9 && (
				<BaseItemContainer style={styles.formContainer}>
					<StepWrapper>
						<TextH4 style={styles.title}>5/5</TextH4>
					</StepWrapper>
					<View style={{ gap: getHeight(2) }}>
						<View style={{ paddingBottom: getHeight(7) }}>
							<TextH2 style={styles.title}>最後にプロフィール画像を選択して下さい。</TextH2>
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
						<View>
							<TextH2 style={styles.title}>顔写真を登録すると</TextH2>
							<TextH2 style={styles.title}>信頼性が向上します。</TextH2>
						</View>
					</View>
					<BaseTransparentButton borderColor="red" borderRadius={6} onPress={handlePersonalSignUp}>
						<TextH5 style={styles.loginText}>完了</TextH5>
					</BaseTransparentButton>
				</BaseItemContainer >
			)}
			{idx === 10 && (
				<BaseItemContainer style={styles.formContainer}>
					<TextH2 style={styles.title}></TextH2>
					<FormView>
						<TextH2 style={styles.title}>ご登録ありがとうございます。</TextH2>
						<TextH2 style={styles.title}>リアコネにようこそ</TextH2>
					</FormView>
					<BaseTransparentButton borderColor="red" borderRadius={6} onPress={() => navigation.navigate(routerConfig.signin.name)}>
						<TextH5 style={styles.loginText}>ログイン</TextH5>
					</BaseTransparentButton>
				</BaseItemContainer >
			)}
		</PersonalSignUpWrapper >
	)
}

const PersonalSignUpWrapper = styled(View)(({ theme }) => ({
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
	display: 'flex',
	justifyContent: "center"
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
	width: getWidth(50),
	height: getWidth(50),
	borderRadius: getWidth(100),
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
	loginText: {
		fontWeight: 700,
	},
	avatarImg: {
		width: getWidth(50),
		height: getWidth(50),
		borderRadius: 100
	},
	photographImg: {
		width: getWidth(60),
		height: getWidth(50),
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
		fontWeight: '500',
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

export { PersonalSignUp }