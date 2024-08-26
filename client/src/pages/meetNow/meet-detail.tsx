import React from "react";
import { Image, Pressable, View } from "react-native";
import styled from "styled-components";

import { getHeight, getWidth } from "../../theme/responsive";
import { TextActiveH4, TextH3, TextH4, TextH5, TextH6 } from "../../components/typography";
import { PersonIconSvg, PhoneIconSvg, arrowLeftIcon, meetNowUserImage4, meetNowImage3 } from "../../assets/image";
import { routerConfig } from "../../router-config";
import { Layout } from "../../components/layout";
import { RealTalkModal } from "./common/real-talk-modal";
import { RealTalkConfirmModal } from "./common/real-talk-confirm-modal";

const MeetDetail = ({ navigation }: ComPropsObject) => {

	const onGoToMeetNow = () => navigation.navigate(routerConfig.meetNow.name)

	const [isModal, setIsModal] = React.useState({
		isRealTalk: false,
		isRealTalkConfirm: false
	})

	return (
		<Layout navigation={navigation} disableHeader>
			<MeetDetailWrapper>
				<HeaderContainer>
					<CloseButton onPress={onGoToMeetNow}>
						<Image source={arrowLeftIcon} style={{ width: getWidth(6.5), height: getWidth(6.5) }} />
					</CloseButton>
					<TextH3>Meet Now 詳細</TextH3>
				</HeaderContainer>

				<MainContainer>
					<DetailContainer>
						<Image source={meetNowUserImage4} style={{ width: getWidth(15), height: getWidth(15) }} />
						<InfoContainer>
							<TextH4>小林りか</TextH4>
							<TextH5>鹿児島県　20代　女性</TextH5>
							<UserCntContainer>
								<PersonIconSvg width={getWidth(4)} height={getWidth(4)} />
								<Desc>1人</Desc>
							</UserCntContainer>
						</InfoContainer>
					</DetailContainer>
					<TextH3 style={{ fontSize: getWidth(3.75), paddingTop: getHeight(0.4) }}>今天文館にいます。</TextH3>
					<TextH6 style={{ paddingTop: getHeight(2) }}>合流希望日</TextH6>
					<View style={{ paddingLeft: getWidth(0.5) }}>
						<TextH4 style={{ paddingTop: getHeight(0.5) }}>第一希望   8月2日 （金）</TextH4>
						<TextH4 style={{ paddingTop: getHeight(0.5) }}>第二希望   8月3日 （土）</TextH4>
					</View>
					<TextH6 style={{ paddingTop: getHeight(2) }}>やりたいこと</TextH6>
					<TextH4>カフェでまったり</TextH4>
					<TextH6 style={{ paddingTop: getHeight(2) }}>やりたいこと本文</TextH6>
					<TextH4>天文館にあるお洒落なカフェで美味しいコーヒーを飲みながらお話ししませんか？</TextH4>

					<ButtonContainer>
						<MeetButton>
							<MeetText>Meet</MeetText>
						</MeetButton>
						<RealTalkButton onPress={() => setIsModal({...isModal, isRealTalk: true})}>
							<PhoneIconSvg width={getWidth(4)} height={getWidth(4)} />
							<RealTalkText>Real Talk</RealTalkText>
						</RealTalkButton>
					</ButtonContainer>
				</MainContainer>
			</MeetDetailWrapper>
			<RealTalkModal isModal={isModal} setIsModal={setIsModal} onCloseModal={() => setIsModal({...isModal, isRealTalk: false})} />
			<RealTalkConfirmModal isModal={isModal} setIsModal={setIsModal} onCloseModal={() => setIsModal({...isModal, isRealTalkConfirm: false})} />
		</Layout>
	)
}

const MeetDetailWrapper = styled(View)(({ theme }) => ({
	backgroundColor: theme.white,
	paddingTop: getWidth(4),
	paddingRight: getWidth(3.3),
	paddingLeft: getWidth(4),
	paddingBottom: getWidth(4),
	display: 'flex',
	gap: getHeight(6.5),
	height: getHeight(100)
}))

const HeaderContainer = styled(View)(({ theme }) => ({
	display: "flex",
	flexDirection: "row",
	justifyContent: 'center',
	alignItems: 'center',
	position: "relative"
}))

const CloseButton = styled(Pressable)(({ theme }) => ({
	position: "absolute",
	left: getWidth(1.5),
	top: 0
}))

const MainContainer = styled(View)(({ theme }) => ({
	display: 'flex',
	borderWidth: 1,
	borderRadius: 4,
	borderColor: '#F3F4F6',
	padding: getWidth(4),
}))

const UserCntContainer = styled(View)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'row',
	marginTop: getHeight(.25),
	gap: getWidth(1),
	alignItems: "center",
}))

const Desc = styled(TextH3)(({ theme }) => ({
	fontSize: getWidth(3),
	fontWeight: 400
}))

const DetailContainer = styled(View)(({ theme }) => ({
	fontSize: getWidth(3),
	fontWeight: 400,
	display: 'flex',
	flexDirection: 'row',
	gap: getWidth(2)
}))

const InfoContainer = styled(View)(({ theme }) => ({
	display: 'flex',
	gap: getHeight(0.5)
}))

const ButtonContainer = styled(View)(({ theme }) => ({
	display: 'flex',
	flexDirection: "row",
	justifyContent: 'center',
	gap: getWidth(10),
	marginTop: getHeight(4.5)
}))

const MeetButton = styled(Pressable)(({ theme }) => ({
	display: "flex",
	flexDirection: "row",
	alignItems: 'center',
	justifyContent: 'center',
	backgroundColor: '#E5E7EB',
	padding: getWidth(3.7),
	width: getWidth(31),
	borderRadius: 20,
}))

const MeetText = styled(TextH3)(({ theme }) => ({
	fontWeight: 700,
	color: '#3B82F6',
}))

const RealTalkButton = styled(Pressable)(({ theme }) => ({
	display: "flex",
	flexDirection: "row",
	alignItems: 'center',
	justifyContent: 'center',
	backgroundColor: '#9DE3E9',
	gap: getWidth(1),
	padding: getWidth(3.7),
	width: getWidth(31),
	borderRadius: 20,
}))

const RealTalkText = styled(TextH3)(({ theme }) => ({
	fontWeight: 700
}))

export { MeetDetail };