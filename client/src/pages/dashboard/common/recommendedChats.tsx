import { Image, ScrollView, StyleSheet, View } from "react-native";
import styled from "styled-components/native";

import { getWidth } from "../../../theme/responsive";
import { TextH3, TextH5 } from "../../../components/typography";
import { recommendedImage3, recommendedImage4, recommendedImage5 } from "../../../assets/image";
import { recommendedImage1, recommendedImage10, recommendedImage2 } from "../../../assets/image";
import { PersonIconSvg, recommendedBadgeImage1, recommendedBadgeImage2 } from "../../../assets/image";
import { recommendedImage6, recommendedImage7, recommendedImage8, recommendedImage9 } from "../../../assets/image";
import { useEffectCustom } from "../../../classes/Functions";
import RestApiClass from "../../../classes/RestApiClass";



const RecommendedChats = () => {
	const firstChatLists: any = useEffectCustom(async () => {
		let RestApi: RestApiClass = new RestApiClass("open_chat")
		RestApi.fields(["id", "chat_name", "age_type", "user_number"])
		RestApi.images("chat_image_file_name_thumbnail")

		return await RestApi.list({ limit: 20 })
	});

	return (
		<RecommendedChatsWrapper>
			<RecommendedChatsHeader>
				<TextH3>九州地方のおすすめチャット</TextH3>
				<TextH5>もっと見る</TextH5>
			</RecommendedChatsHeader>

			<ScrollView horizontal>
				<RecommendedChatsContainer>
					{firstChatLists.map((item: any, key: number) => (
						<FirstChatItem data={item} key={key} />
					))}
				</RecommendedChatsContainer>
			</ScrollView>
		</RecommendedChatsWrapper>
	)
}

const FirstChatItem = ({ data }: any) => {

	return (
		<View style={chatItemStyles.container}>
			{!!data.badge && (
				<Image source={require("../../../assets/image/recommended-chats/badge-1.png")} style={chatItemStyles.badgeImage1} />
			)}


			<Image source={{ uri: data.chat_image_file_name_thumbnail }} style={chatItemStyles.image} />
			<TextH5 numberOfLines={2} ellipsizeMode="tail" style={{ flex: 1 }}>
				{data.chat_name}
			</TextH5>

			<View style={chatItemStyles.footer}>
				<PersonIconSvg width={getWidth(4)} height={getWidth(4)} />
				<TextFollowCount>{data.user_number}</TextFollowCount>
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