import styled from "styled-components/native";
import { Image, Pressable, StyleSheet, View } from "react-native";

import { Layout } from "../../components/layout";
import { getWidth } from "../../theme/responsive";
import { SearchInput } from "../../components/input";
import { TextActiveH3, TextH4, TextH5, TextH6 } from "../../components/typography";
import { ActivePhoneSvg, ActiveRightIconSvg, meetNowImage1, meetNowImage2, meetNowImage3, meetNowImage4, meetNowUserImage1, meetNowUserImage2, meetNowUserImage3, meetNowUserImage4, PhoneIconSvg, PlusIconSvg, SortIconSvg, UserAvatarIconSvg } from "../../assets/image";
import { ComponentHeader } from "../../components/componentHeader/componentHeader";
import { ActiveFifthButton, ActiveThirdButton } from "../../components/button";
import React, { useState } from "react";
import { CustomToggleButton } from "../../components/input/togglebuttton";
import { routerConfig } from "../../router-config";

interface SearchComponentProps {
	title: string
}

interface MeetNowItemProps {
	data: MeetNowItemObject
}

interface MeetNowItemObject {
	image: any
	avatar: any
	name: string
	age: string
	position: string
	meetDay: string
	meetTitle: string
	count: string
}

const MockMeetNowLists: MeetNowItemObject[] = [
	{
		image: meetNowImage1,
		avatar: meetNowUserImage1,
		name: "石井はるか",
		age: "20代　女性",
		position: "天文館",
		meetDay: " ①8.02   ②8.03",
		meetTitle: "飲みに行きませんか?",
		count: '1人',
	}, {
		image: meetNowImage2,
		avatar: meetNowUserImage2,
		name: "安藤まさる",
		age: "40代　男性",
		position: "枕先漁港",
		meetDay: " ①8.02   ②8.03",
		meetTitle: "釣り好きカモン！🎣",
		count: '1人',
	}, {
		image: meetNowImage3,
		avatar: meetNowUserImage3,
		name: "楠本千夏",
		age: "30代　女性",
		position: "鹿児島中央駅前",
		meetDay: "①8.02",
		meetTitle: "カラオケボックス行きませんか",
		count: '1人',
	}, {
		image: meetNowImage4,
		avatar: meetNowUserImage4,
		name: "石井はるか",
		age: "20代　女性",
		position: "天文館",
		meetDay: "①8.02   ②8.03",
		meetTitle: "カフェでまったりしません",
		count: '1人',
	}
]

const MeetNow = ({ navigation }: ComPropsObject) => {
	const onGoBack = () => {
		navigation.navigate(routerConfig.home.name)
	}

	return (
		<React.Fragment>
			<Layout navigation={navigation} disableHeader={true}>
				<MeetNowContainer>
					<ComponentHeader title="Meet Now 一覧" onGoBack={onGoBack} />
					<SeachComponent title="鹿児島県" />

					<View>
						{MockMeetNowLists.map((data: MeetNowItemObject, key: number) => (
							<MeetNowItem data={data} key={key} />
						))}
					</View>
				</MeetNowContainer>
			</Layout>

			<MeetNowFooter />
		</React.Fragment>
	)
}

const SeachComponent = ({ title }: SearchComponentProps) => {
	const [searchText, setSearchText] = useState("");

	const onChangeText = (text: string) => {
		setSearchText(text)
	}

	return (
		<SeachComponentWrapper>
			<SearchTextContainer>
				<TextH4 style={searchStyles.textFontWeight}>{title}</TextH4>
				<SortIconSvg width={getWidth(4)} height={getWidth(4)} />
			</SearchTextContainer>

			<View style={searchStyles.inputContainer}>
				<SearchInput placeholder="フリーワード"
					value={searchText} onChangeText={onChangeText}
				/>
			</View>
		</SeachComponentWrapper>
	)
}

const MeetNowItem = ({ data }: MeetNowItemProps) => {
	const handleMore = () => {

	}

	return (
		<MeetItemWrapper>
			<View style={meetNowItemStyles.imageContainer}>
				<Image source={data.image} style={meetNowItemStyles.iamge} />
			</View>

			<View style={meetNowItemStyles.container}>
				<MeetItemTextContainer>
					<View style={meetNowItemStyles.textWrapper}>
						<View style={meetNowItemStyles.avatarContainer}>
							<Image source={data.avatar} style={meetNowItemStyles.avatar} />

							<View>
								<TextH4 style={meetNowItemStyles.textWeight6}>{data.name}</TextH4>
								<TextH6 style={meetNowItemStyles.textWeight6}>{data.age}</TextH6>

								<View style={meetNowItemStyles.textItemContainer}>
									<UserAvatarIconSvg width={getWidth(3)} height={getWidth(3)} />
									<TextH6>{data.count}</TextH6>
								</View>
							</View>
						</View>

						<TextH5>今 <TextH5 style={meetNowItemStyles.textWeight6}>{data.position}</TextH5> にいます</TextH5>
						<TextH5 style={meetNowItemStyles.textWeight6}>{data.meetDay}</TextH5>
						<TextH4 style={meetNowItemStyles.textWeight5}>{data.meetTitle}</TextH4>
					</View>

					<View style={meetNowItemStyles.footerContainer}>
						<Pressable onPress={handleMore} style={meetNowItemStyles.footerBtn}>
							<TextActiveH3>詳細</TextActiveH3>
							<ActiveRightIconSvg width={getWidth(6)} height={getWidth(6)} />
						</Pressable>
					</View>
				</MeetItemTextContainer>
			</View>
		</MeetItemWrapper >
	)
}

const MeetNowFooter = () => {
	const [isChecked, setIsChecked] = useState(true);

	const onChangeToggle = () => {
		setIsChecked(!isChecked);
	}

	return (
		<MeetNowFooterWrapper>
			<ActiveThirdButton borderRadius={100} style={meetNowFooterStyles.newButton}>
				<PlusIconSvg width={getWidth(5)} height={getWidth(5)} />
				<TextH4 style={meetNowFooterStyles.textWeight}>新規作成</TextH4>
			</ActiveThirdButton>

			<View style={{ flex: 1 }}>
				<ActiveFifthButton borderRadius={100} style={meetNowFooterStyles.callButton} disabled={!isChecked}>
					<View style={meetNowFooterStyles.callButtonTextContainer}>
						{!!isChecked && (
							<ActivePhoneSvg width={getWidth(6)} height={getWidth(6)} />
						)}

						{!isChecked && (
							<PhoneIconSvg width={getWidth(6)} height={getWidth(6)} />
						)}

						<TextH4 style={meetNowFooterStyles.textWeight}>通話待機中</TextH4>
					</View>

					<CustomToggleButton isChecked={isChecked} onChange={onChangeToggle} />
				</ActiveFifthButton>
			</View>
		</MeetNowFooterWrapper>
	)
}

const MeetNowFooterWrapper = styled(View)(({ theme }) => ({
	position: "absolute",
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	gap: theme.globalSpacingGap,
	padding: `0px ${theme.globalSpacingX}px`,

	bottom: getWidth(20),
}))

const MeetNowContainer = styled(View)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	padding: `${theme.globalSpacingX}px 0px`,
	gap: getWidth(4),
}))

const SeachComponentWrapper = styled(View)(({ theme }) => ({
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "space-between",
	padding: `${theme.globalBoxPadding}px ${theme.globalSpacingX}px`,
	marginTop: theme.globalBoxPadding,
	gap: getWidth(5),
}))

const SearchTextContainer = styled(View)(({ theme }) => ({
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	gap: theme.globalSpacingGap,
	padding: theme.globalBoxPadding,
}))

const MeetItemWrapper = styled(View)(({ theme }) => ({
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	borderBottomWidth: 1,
	borderBottomStyle: 'solid',
	borderBottomColor: theme.borderActiveColor1,
}))

const MeetItemTextContainer = styled(View)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	gap: theme.globalSpacingGap,
	padding: theme.globalSpacingX,
}))

const searchStyles = StyleSheet.create({
	textFontWeight: {
		fontWeight: 500,
	},
	inputContainer: {
		flex: 1,
	}
})

const meetNowItemStyles = StyleSheet.create({
	container: {
		flex: 1,
	},
	imageContainer: {
		flex: 1,
		aspectRatio: 1,
	},
	iamge: {
		width: "100%",
		height: "100%",
	},
	avatar: {
		width: getWidth(15),
		height: getWidth(15),
	},
	avatarContainer: {
		display: 'flex',
		flexDirection: "row",
		alignItems: "center",
		paddingBottom: getWidth(1.5),
		gap: getWidth(2),
	},
	textItemContainer: {
		display: 'flex',
		flexDirection: "row",
		alignItems: "center",
		gap: getWidth(1),
	},
	textWrapper: {
		display: 'flex',
		flexDirection: "column",
		gap: getWidth(1.5),
	},
	textWeight7: {
		fontWeight: 700,
	},
	textWeight6: {
		fontWeight: 600,
	},
	textWeight5: {
		fontWeight: 500,
	},
	footerContainer: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-end",
	},
	footerBtn: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
	}
})

const meetNowFooterStyles = StyleSheet.create({
	newButton: {
		alignItems: "center",
		gap: getWidth(1.5),
	},
	callButton: {
		alignItems: "center",
		justifyContent: "space-between",
		gap: getWidth(1.5),
	},
	callButtonTextContainer: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		gap: getWidth(1.5),
	},
	textWeight: {
		fontWeight: 600,
	}
})

export { MeetNow };