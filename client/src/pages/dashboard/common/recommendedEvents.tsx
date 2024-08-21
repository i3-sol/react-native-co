import styled from "styled-components/native";
import { Image, ScrollView, StyleSheet, View } from "react-native";

import { getWidth } from "../../../theme/responsive";
import { TextH3, TextH5, TextH6 } from "../../../components/typography";
import { recommendedEventImage8, recommendedEventImage9 } from "../../../assets/image";
import { ActiveHeartIconSvg, DisableHeartIconSvg, recommendedEventImage1 } from "../../../assets/image";
import { recommendedEventImage2, recommendedEventImage3, recommendedEventImage4 } from "../../../assets/image";
import { recommendedEventImage5, recommendedEventImage6, recommendedEventImage7 } from "../../../assets/image";

interface FirstEventItemProps {
	data: Events1List
}

interface SecondEventItemProps {
	data: Events2List
}

interface Events1List {
	image: any
	avatar: any
	dateTime: string
	street: string
	city: string
	country: string
	favorite: boolean
}

interface Events2List {
	image: any
	dateTime: string
	title: string
	name: string
	favorite: boolean
}

const firstEventLists: Events1List[] = [
	{
		image: recommendedEventImage1,
		avatar: recommendedEventImage7,
		dateTime: '2024.01.01',
		street: 'カレー付きが集まる大名',
		city: '熊本市中央区',
		country: 'リアルインド',
		favorite: false,
	}, {
		image: recommendedEventImage2,
		avatar: recommendedEventImage8,
		dateTime: '2024.01.01',
		street: 'クライミングの初心者集れ！',
		city: '開催場所',
		country: '居酒屋　とりあえず',
		favorite: false,
	}, {
		image: recommendedEventImage3,
		avatar: recommendedEventImage9,
		dateTime: '2024.01.01',
		street: 'イベント名',
		city: '開催場所',
		country: '店名',
		favorite: false,
	}
]

const secondEventLists: Events2List[] = [
	{
		image: recommendedEventImage4,
		dateTime: '2024.01.01',
		title: 'キャンプ好きが集う',
		name: '熊本市南区',
		favorite: true
	}, {
		image: recommendedEventImage5,
		dateTime: '2024.01.01',
		title: 'nekoよりInu派',
		name: '熊本市中央区',
		favorite: false
	}, {
		image: recommendedEventImage6,
		dateTime: '2024.01.01',
		title: 'フラワーアレンジメント',
		name: '熊本市西区',
		favorite: false
	}
]

const RecommendedEvents = () => {
	return (
		<RecommendedEventsWrapper>
			<RecommendedEventsHeader>
				<TextH3>熊本県の今週のピックアップ店舗</TextH3>
				<TextH5>もっと見る</TextH5>
			</RecommendedEventsHeader>

			<ScrollView horizontal>
				<RecommendedEventsContainer>
					{firstEventLists.map((item: Events1List, key: number) => (
						<FirstEventItem data={item} key={key} />
					))}
				</RecommendedEventsContainer>
			</ScrollView>

			<ScrollView horizontal>
				<RecommendedEventsContainer>
					{secondEventLists.map((item: Events2List, key: number) => (
						<SecondEventItem data={item} key={key} />
					))}
				</RecommendedEventsContainer>
			</ScrollView>
		</RecommendedEventsWrapper>
	)
}

const FirstEventItem = ({ data }: FirstEventItemProps) => {
	return (
		<FirstEventItemWrapper style={firstEventStyles.container}>
			<Image source={data.image} style={firstEventStyles.image} />

			{data.favorite && (
				<ActiveHeartIconSvg
					width={getWidth(6)}
					height={getWidth(6)}
					style={firstEventStyles.favorite}
				/>
			)}

			{!data.favorite && (
				<DisableHeartIconSvg
					width={getWidth(6)}
					height={getWidth(6)}
					style={firstEventStyles.favorite}
				/>
			)}

			<View style={firstEventStyles.contentContainer}>
				<Image source={data.avatar} style={firstEventStyles.avatar} />

				<View style={firstEventStyles.contents}>
					<TextH6 numberOfLines={1} ellipsizeMode="tail">{data.dateTime}</TextH6>
					<TextH5 numberOfLines={1} ellipsizeMode="tail">{data.street}</TextH5>
					<TextH5 numberOfLines={1} ellipsizeMode="tail">{data.city}</TextH5>
					<TextH5 numberOfLines={1} ellipsizeMode="tail">{data.country}</TextH5>
				</View>
			</View>
		</FirstEventItemWrapper>
	)
}

const SecondEventItem = ({ data }: SecondEventItemProps) => {
	return (
		<FirstEventItemWrapper style={secondEventStyles.container}>
			<Image source={data.image} style={secondEventStyles.image} />

			{data.favorite && (
				<ActiveHeartIconSvg
					width={getWidth(5.5)}
					height={getWidth(5.5)}
					style={secondEventStyles.favorite}
				/>
			)}

			{!data.favorite && (
				<DisableHeartIconSvg
					width={getWidth(5.5)}
					height={getWidth(5.5)}
					style={secondEventStyles.favorite}
				/>
			)}

			<View style={secondEventStyles.contentContainer}>
				<TextH6 numberOfLines={1} ellipsizeMode="tail">{data.dateTime}</TextH6>
				<TextH5 numberOfLines={1} ellipsizeMode="tail">{data.title}</TextH5>
				<TextH5 numberOfLines={1} ellipsizeMode="tail">{data.name}</TextH5>
			</View>
		</FirstEventItemWrapper>
	)
}

const RecommendedEventsWrapper = styled(View)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	gap: theme.globalSpacingGap / 2,
}))

const RecommendedEventsHeader = styled(View)(({ theme }) => ({
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "space-between",
	padding: `${theme.globalSpacingX}px 0px`,
}))

const RecommendedEventsContainer = styled(View)({
	display: "flex",
	flexDirection: "row",
	gap: getWidth(4),
	paddingBottom: getWidth(2),
})

const FirstEventItemWrapper = styled(View)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	backgroundColor: theme.white,
	borderRadius: 8,
}))

const firstEventStyles = StyleSheet.create({
	container: {
		position: "relative",
		width: getWidth(53),
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.3,
		shadowRadius: 1,
		elevation: 2,
	},
	image: {
		width: getWidth(53),
		height: getWidth(31.5),
		borderTopLeftRadius: 8,
		borderTopRightRadius: 8,
	},
	avatar: {
		width: getWidth(18.5),
		height: getWidth(18.5),
		borderRadius: 8,
	},
	contentContainer: {
		display: "flex",
		flexDirection: "row",
		padding: getWidth(1.5),
		gap: getWidth(1.5),
	},
	contents: {
		flex: 1,
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-evenly",
	},
	favorite: {
		position: "absolute",
		top: getWidth(2),
		right: getWidth(2),
		zIndex: 2,
	}
})

const secondEventStyles = StyleSheet.create({
	container: {
		position: "relative",
		width: getWidth(34),
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.3,
		shadowRadius: 1,
		elevation: 2,
	},
	image: {
		width: getWidth(34),
		height: getWidth(29),
		borderTopLeftRadius: 8,
		borderTopRightRadius: 8,
	},
	avatar: {
		width: getWidth(18.5),
		height: getWidth(18.5),
		borderRadius: 8,
	},
	contentContainer: {
		display: "flex",
		flexDirection: "column",
		padding: getWidth(1.8),
		gap: getWidth(1.3),
	},
	contents: {
		flex: 1,
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-evenly",
	},
	favorite: {
		position: "absolute",
		top: getWidth(1.3),
		right: getWidth(1.3),
		zIndex: 2,
	}
})

export { RecommendedEvents };