import { Image, StyleSheet, View } from "react-native";
import styled from "styled-components/native";

import { TextH3, TextH4, TextH5 } from "../../../components/typography";
import { featuredStoreImage, PlaceWhiteIconSvg } from "../../../assets/image";
import { getWidth } from "../../../theme/responsive";
import { getUrl, useEffectCustom } from "../../../classes/Functions";
import RestApiClass from "../../../classes/RestApiClass";

const FeaturedStores = ({ user }: ComPropsObject) => {
	const store:any = useEffectCustom(async () => {

		let RestApi: RestApiClass = new RestApiClass("store", "pickup", "info")		

		let stores:any = await RestApi.list({limit:1})

		if (stores[0]){
			return stores[0]
		}

		return null
	})

	
	return (
		<FeaturedStoresWrapper>
			<FeaturedStoresHeader>
				<TextH3>{user.prefecture.prefecture_name}の今週のピックアップ店舗</TextH3>
				<TextH5>もっと見る</TextH5>
			</FeaturedStoresHeader>

			<FeaturedStoresContainer>
				<Image source={{url:getUrl() + store.image1}} style={featuredStoreStyles.image} />

				<View style={featuredStoreStyles.contentContainer}>
					<TextH3 style={featuredStoreStyles.text}>{store.store_name}</TextH3>

					<View style={featuredStoreStyles.place}>
						<PlaceWhiteIconSvg width={getWidth(4)} height={getWidth(4)}/>
						<TextH4 style={featuredStoreStyles.text}>{store.address}</TextH4>
					</View>
				</View>
			</FeaturedStoresContainer>
		</FeaturedStoresWrapper>
	)
}

const FeaturedStoresWrapper = styled(View)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	gap: theme.globalSpacingGap / 2,
}))

const FeaturedStoresHeader = styled(View)(({ theme }) => ({
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "space-between",
	padding: `${theme.globalSpacingX}px 0px`,
}))

const FeaturedStoresContainer = styled(View)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	borderRadius: 8,
	backgroundColor: theme.FirstBackground,
	overflow: "hidden",
}))

const featuredStoreStyles = StyleSheet.create({
	image: {
		width: "100%",
		maxWidth: "100%",
		height: getWidth(53),
		objectFit: "fill",
	},
	contentContainer: {
		display: "flex",
		flexDirection: "column",
		padding: getWidth(2),
	},
	place: {
		gap: 2,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
	},
	text: {
		color: "white",
		fontWeight: 500,
	}
})

export { FeaturedStores };