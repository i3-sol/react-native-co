import styled from "styled-components/native";
import { Image, ScrollView, StyleSheet, View } from "react-native";

import { getWidth } from "../../../theme/responsive";
import { TextH3, TextH5, TextH6 } from "../../../components/typography";
import { recommendedEventImage8, recommendedEventImage9 } from "../../../assets/image";
import { ActiveHeartIconSvg, DisableHeartIconSvg, recommendedEventImage1 } from "../../../assets/image";
import { recommendedEventImage2, recommendedEventImage3, recommendedEventImage4 } from "../../../assets/image";
import { recommendedEventImage5, recommendedEventImage6, recommendedEventImage7 } from "../../../assets/image";
import { Prefecture } from "../../../components/view/prefecture";
import { EventDate } from "../../../components/view/event";
import { date, getUrl, useEffectCustom } from "../../../classes/Functions";
import RestApiClass from "../../../classes/RestApiClass";

interface EventItemProps {
	data: EventsList
}

interface EventsList {
	event_chat_name: string
	event_chat_introduction: string
	event_chat_recruitment_start_on: string
	event_chat_image1_thumbnail: string
	event_chat_image2_thumbnail: string,
	address:string,
	store:any
}


const RecommendedEvents = ({ user }: ComPropsObject) => {

	const events = useEffectCustom(async () => {
		let events:any = {
			stores:[],
			users:[]
		}

		
		let RestApiStore: RestApiClass = new RestApiClass("event_chat_store_hosted", "recommend", "info")
		events.stores = await RestApiStore.list({ limit: 20 })
		
		let RestApiUser: RestApiClass = new RestApiClass("event_chat_user_hosted", "recommend", "info")
		events.users = await RestApiUser.list({ limit: 20 })

		return events
	});

	if (!events.stores){
		events.stores = []
	}
	if (!events.users){
		events.users = []
	}

	return (
		<RecommendedEventsWrapper>
			<RecommendedEventsHeader>
				<TextH3><Prefecture item={user.prefecture} />のおすすめイベント</TextH3>
				<TextH5>もっと見る</TextH5>
			</RecommendedEventsHeader>

			<ScrollView horizontal>
				<RecommendedEventsContainer>
					{events.stores.map((item: EventsList, key: number) => (
						<FirstEventItem data={item} key={key} />
					))}
				</RecommendedEventsContainer>

			</ScrollView>

			<ScrollView horizontal>
				<RecommendedEventsContainer>
					{events.users.map((item: EventsList, key: number) => (
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
			<Image source={{uri:getUrl() + data.event_chat_image1}} style={firstEventStyles.image} />

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
				{data.store && <Image source={{uri:getUrl() + data.store.image1}} style={firstEventStyles.avatar} /> }


				<View style={firstEventStyles.contents}>
					<TextH6 numberOfLines={1} ellipsizeMode="tail"><EventDate item={data} /></TextH6>
					<TextH5 numberOfLines={1} ellipsizeMode="tail">{data.event_chat_name}</TextH5>
					<TextH5 numberOfLines={1} ellipsizeMode="tail">{data.address}</TextH5>
					<TextH5 numberOfLines={1} ellipsizeMode="tail">{data.store.store_name}</TextH5>
				</View>
			</View>
		</FirstEventItemWrapper>
	)
}

const SecondEventItem = ({ data }: SecondEventItemProps) => {
	console.log(data)

	return (
		<FirstEventItemWrapper style={secondEventStyles.container}>
			<Image source={{uri: getUrl() +  data.event_chat_image1}} style={secondEventStyles.image} />

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
				<TextH6 numberOfLines={1} ellipsizeMode="tail"><EventDate item={data} /></TextH6>
				<TextH5 numberOfLines={1} ellipsizeMode="tail">{data.event_chat_name}</TextH5>
				<TextH5 numberOfLines={1} ellipsizeMode="tail">{data.address}</TextH5>
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