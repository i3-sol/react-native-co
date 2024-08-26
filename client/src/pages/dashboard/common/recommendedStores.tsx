import { Image, StyleSheet, View } from "react-native";
import styled from "styled-components/native";

import { TextH3, TextH4, TextH5 } from "../../../components/typography";
import { PlaceIconSvg, recommendedStoreImage1, recommendedStoreImage2, ResturantIconSvg, ScheduleIconSvg } from "../../../assets/image";
import { recommendedStoreImage3, recommendedStoreImage4, recommendedStoreImage5 } from "../../../assets/image";
import { getWidth } from "../../../theme/responsive";
import { BaseDivider } from "../../../components/divider";
import { getUrl, useEffectCustom } from "../../../classes/Functions";
import RestApiClass from "../../../classes/RestApiClass";
import { BusinessHours } from "../../../components/view/ businessHours";

interface StoreItemProps {
	data: StoreObject
}

interface StoreObject {
	store_name: string
	image1_thumbnail: string
	address: string
	opening_hours: string
	closing_hours : string
	store_genre: any
}


const RecommendedStores = ({ user }: ComPropsObject) => {

	const stores:StoreObject[] = useEffectCustom(async () => {

		let RestApi: RestApiClass = new RestApiClass("store", "recommend", "info")
		
		let stores:any = await RestApi.list({limit:5})
				
		return stores
	})


	console.log(stores)

	return (
		<RecommendedStoresWrapper>
			<RecommendedStoresHeader>
				<TextH3>{user.prefecture.prefecture_name}のおすすめ店舗</TextH3>
				<TextH5>もっと見る</TextH5>
			</RecommendedStoresHeader>

			<RecommendedStoresContainer>
				{stores.map((store: StoreObject, key: number) => (
					<StoreItem data={store} key={key} />
				))}
			</RecommendedStoresContainer>
		</RecommendedStoresWrapper>
	)
}

const StoreItem = ({ data }: StoreItemProps) => {
	return (
		<View style={recommendedStoreStyles.wrapper}>
			<Image source={{url:getUrl() + data.image1}} style={recommendedStoreStyles.image} />

			<StoreItemContainer style={recommendedStoreStyles.container}>
				<TextH4 numberOfLines={1} ellipsizeMode="tail" style={{ fontWeight: 600 }}>{data.store_name}</TextH4>

				<View style={{ gap: getWidth(0.3) }}>
					<View style={recommendedStoreStyles.textContainer}>
						<PlaceIconSvg width={getWidth(5)} height={getWidth(5)} />
						<ContentText numberOfLines={1} ellipsizeMode="tail">{data.address}</ContentText>
					</View>

					<View style={recommendedStoreStyles.textContainer}>
						<ScheduleIconSvg width={getWidth(5)} height={getWidth(5)} />
						<ContentText numberOfLines={1} ellipsizeMode="tail">
							<BusinessHours item={data} />
						</ContentText>
					</View>

					<View style={recommendedStoreStyles.textContainer}>
						<ResturantIconSvg width={getWidth(5)} height={getWidth(5)} />
						<ContentText numberOfLines={1} ellipsizeMode="tail">{data.store_genre.genre_name}</ContentText>
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