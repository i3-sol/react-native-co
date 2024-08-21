import { Image, StyleSheet, View } from "react-native";
import styled from "styled-components/native";

import { TextH3, TextH4, TextH5 } from "../../../components/typography";
import { PlaceIconSvg, recommendedStoreImage1, recommendedStoreImage2, ResturantIconSvg, ScheduleIconSvg } from "../../../assets/image";
import { recommendedStoreImage3, recommendedStoreImage4, recommendedStoreImage5 } from "../../../assets/image";
import { getWidth } from "../../../theme/responsive";
import { BaseDivider } from "../../../components/divider";

interface StoreItemProps {
	data: StoreObject
}

interface StoreObject {
	image: any
	name: string
	place: string
	time: string
	resturantName: string
}

const storeLists: StoreObject[] = [
	{
		image: recommendedStoreImage1,
		name: '店名',
		place: '場所',
		time: '18:00-00:00',
		resturantName: '居酒屋',
	}, {
		image: recommendedStoreImage2,
		name: '洋食堂 ストリートギンザ101',
		place: '熊本県熊本市中央区下通１丁目8番地23',
		time: '17:00-23:00',
		resturantName: 'ダイニングバー・バル',
	}, {
		image: recommendedStoreImage3,
		name: '地鶏と馬刺し　個室バル　TORi',
		place: '熊本県熊本市中央区下通１丁目9-17 2F',
		time: '17:00-00:00',
		resturantName: '居酒屋',
	}, {
		image: recommendedStoreImage4,
		name: '個室居酒屋 柏 かしわ',
		place: '熊本県熊本市中央区新市街3-19 プールスビル1F',
		time: '17:00-00:00',
		resturantName: '居酒屋',
	}, {
		image: recommendedStoreImage5,
		name: 'Italiana La Bucca イタリアーナ ラ ブッカ',
		place: '熊本県熊本市中央区下通１-9-16 ブロッサム下通3　1F',
		time: '17:00-00:00',
		resturantName: 'イタリアン',
	}
]

const RecommendedStores = () => {
	return (
		<RecommendedStoresWrapper>
			<RecommendedStoresHeader>
				<TextH3>熊本県のおすすめ店舗</TextH3>
				<TextH5>もっと見る</TextH5>
			</RecommendedStoresHeader>

			<RecommendedStoresContainer>
				{storeLists.map((store: StoreObject, key: number) => (
					<StoreItem data={store} key={key} />
				))}
			</RecommendedStoresContainer>
		</RecommendedStoresWrapper>
	)
}

const StoreItem = ({ data }: StoreItemProps) => {
	return (
		<View style={recommendedStoreStyles.wrapper}>
			<Image source={data.image} style={recommendedStoreStyles.image} />

			<StoreItemContainer style={recommendedStoreStyles.container}>
				<TextH4 numberOfLines={1} ellipsizeMode="tail" style={{ fontWeight: 600 }}>{data.name}</TextH4>

				<View style={{ gap: getWidth(0.3) }}>
					<View style={recommendedStoreStyles.textContainer}>
						<PlaceIconSvg width={getWidth(5)} height={getWidth(5)} />
						<ContentText numberOfLines={1} ellipsizeMode="tail">{data.place}</ContentText>
					</View>

					<View style={recommendedStoreStyles.textContainer}>
						<ScheduleIconSvg width={getWidth(5)} height={getWidth(5)} />
						<ContentText numberOfLines={1} ellipsizeMode="tail">{data.time}</ContentText>
					</View>

					<View style={recommendedStoreStyles.textContainer}>
						<ResturantIconSvg width={getWidth(5)} height={getWidth(5)} />
						<ContentText numberOfLines={1} ellipsizeMode="tail">{data.resturantName}</ContentText>
					</View>
				</View>

				<BaseDivider size={1} />
			</StoreItemContainer>
		</View>
	)
}

const RecommendedStoresWrapper = styled(View)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	gap: theme.globalSpacingGap / 2,
	paddingBottom: getWidth(20),
}))

const RecommendedStoresHeader = styled(View)(({ theme }) => ({
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "space-between",
	padding: `${theme.globalSpacingX}px 0px`,
}))

const RecommendedStoresContainer = styled(View)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	gap: getWidth(5),
	borderRadius: 8,
}))

const StoreItemContainer = styled(View)(({ theme }) => ({
	borderBottomColor: theme.footerBackground,
}))

const ContentText = styled(TextH5)(({ theme }) => ({
	color: theme.typographySecondColor,
	flex: 1,
}))

const recommendedStoreStyles = StyleSheet.create({
	wrapper: {
		display: "flex",
		flexDirection: "row",
		gap: getWidth(3),
	},
	container: {
		flex: 1,
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		paddingRight: getWidth(5),
	},
	image: {
		width: getWidth(24),
		height: getWidth(24),
		borderRadius: 8,
	},
	textContainer: {
		gap: 2,
		display: "flex",
		flexDirection: "row",
		alignItems: 'center',
	}
})

export { RecommendedStores };