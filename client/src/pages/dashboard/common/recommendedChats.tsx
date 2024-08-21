import { Image, ScrollView, StyleSheet, View } from "react-native";
import styled from "styled-components/native";

import { getWidth } from "../../../theme/responsive";
import { TextH3, TextH5 } from "../../../components/typography";
import { recommendedImage3, recommendedImage4, recommendedImage5 } from "../../../assets/image";
import { recommendedImage1, recommendedImage10, recommendedImage2 } from "../../../assets/image";
import { PersonIconSvg, recommendedBadgeImage1, recommendedBadgeImage2 } from "../../../assets/image";
import { recommendedImage6, recommendedImage7, recommendedImage8, recommendedImage9 } from "../../../assets/image";

interface ChatItemProps {
	data: ChatObject
}

interface ChatObject {
	image: any
	text: string
	follow: number
	badge?: any
}

const firstChatLists: ChatObject[] = [
	{
		image: recommendedImage1,
		text: "ゴルフも円熟味が増しあいうえお描き",
		follow: 56,
	}, {
		image: recommendedImage2,
		text: "サッカー少年",
		follow: 36,
		badge: recommendedBadgeImage1
	}, {
		image: recommendedImage3,
		text: "温泉同好会",
		follow: 43,
		badge: recommendedBadgeImage2,
	}, {
		image: recommendedImage4,
		text: "カメラ好き集",
		follow: 136,
		badge: recommendedBadgeImage1
	}
]

const secondChatLists: ChatObject[] = [
	{
		image: recommendedImage5,
		text: "ゲームで盛りあがろう",
		follow: 61,
	}, {
		image: recommendedImage6,
		text: "地域のお祭り巡り",
		follow: 11,
		badge: recommendedBadgeImage2,
	}, {
		image: recommendedImage7,
		text: "Yoga",
		follow: 59,
	}, {
		image: recommendedImage8,
		text: "週末バスケ",
		follow: 23,
		badge: recommendedBadgeImage1,
	}, {
		image: recommendedImage9,
		text: "ゲームで盛りあがろう",
		follow: 136,
		badge: recommendedBadgeImage1,
	}, {
		image: recommendedImage10,
		text: "ゲームで盛りあがろう",
		follow: 136,
		badge: recommendedBadgeImage1,
	}
]

const RecommendedChats = () => {
	return (
		<RecommendedChatsWrapper>
			<RecommendedChatsHeader>
				<TextH3>九州地方のおすすめチャット</TextH3>
				<TextH5>もっと見る</TextH5>
			</RecommendedChatsHeader>

			<ScrollView horizontal>
				<RecommendedChatsContainer>
					{firstChatLists.map((item: ChatObject, key: number) => (
						<FirstChatItem data={item} key={key} />
					))}
				</RecommendedChatsContainer>
			</ScrollView>

			<ScrollView horizontal>
				<RecommendedChatsContainer1>
					{secondChatLists.map((item: ChatObject, key: number) => (
						<SecondChatItem data={item} key={key} />
					))}
				</RecommendedChatsContainer1>
			</ScrollView>
		</RecommendedChatsWrapper>
	)
}

const FirstChatItem = ({ data }: ChatItemProps) => {
	return (
		<View style={chatItemStyles.container}>
			{!!data.badge && (
				<Image source={data.badge} style={chatItemStyles.badgeImage1} />
			)}

			<Image source={data.image} style={chatItemStyles.image} />
			<TextH5 numberOfLines={2} ellipsizeMode="tail" style={{ flex: 1 }}>
				{data.text}
			</TextH5>

			<View style={chatItemStyles.footer}>
				<PersonIconSvg width={getWidth(4)} height={getWidth(4)} />
				<TextFollowCount>{data.follow}</TextFollowCount>
			</View>
		</View>
	)
}

const SecondChatItem = ({ data }: ChatItemProps) => {
	return (
		<View style={chatItemStyles.container2}>
			{!!data.badge && (
				<Image source={data.badge} style={chatItemStyles.badgeImage2} />
			)}

			<Image source={data.image} style={chatItemStyles.image2} />
			<TextH5 numberOfLines={2} ellipsizeMode="tail" style={{ flex: 1 }}>
				{data.text}
			</TextH5>

			<View style={chatItemStyles.footer}>
				<PersonIconSvg width={getWidth(4)} height={getWidth(4)} />
				<TextFollowCount>{data.follow}</TextFollowCount>
			</View>
		</View>
	)
}

const RecommendedChatsWrapper = styled(View)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	gap: theme.globalSpacingGap / 2,
}))

const RecommendedChatsHeader = styled(View)(({ theme }) => ({
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "space-between",
	padding: `${theme.globalSpacingX}px 0px`,
}))

const RecommendedChatsContainer = styled(View)({
	display: "flex",
	flexDirection: "row",
	gap: getWidth(2),
	paddingBottom: getWidth(2),
})

const RecommendedChatsContainer1 = styled(View)({
	display: "flex",
	flexDirection: "row",
	gap: getWidth(2.5),
	paddingBottom: getWidth(2),
})

const TextFollowCount = styled(TextH5)(({ theme }) => ({
	color: theme.typographySecondColor,
}))

const chatItemStyles = StyleSheet.create({
	container: {
		gap: 3,
		display: "flex",
		flexDirection: "column",
		width: getWidth(25),
		height: "100%",
	},
	container2: {
		position: "relative",
		gap: 3,
		display: "flex",
		flexDirection: "column",
		width: getWidth(20),
		height: "100%",
	},
	image: {
		height: getWidth(25),
		maxWidth: getWidth(25),
	},
	image2: {
		height: getWidth(20),
		maxWidth: getWidth(20),
	},
	badgeImage1: {
		position: "absolute",
		top: 0,
		right: 0,
		zIndex: 2,
		width: getWidth(7),
		height: getWidth(7),
	},
	badgeImage2: {
		position: "absolute",
		top: 0,
		right: 0,
		zIndex: 2,
		width: getWidth(6),
		height: getWidth(6),
	},
	footer: {
		gap: 3,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
})

export { RecommendedChats };