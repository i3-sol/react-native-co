import { View } from "react-native";
import styled from "styled-components/native";

import { MeetNow } from "./common/meetNow";
import { Categorys } from "./common/categorys";
import { Layout } from "../../components/layout";
import { RecommendedChats } from "./common/recommendedChats";
import { RecommendedEvents } from "./common/recommendedEvents";
import { BaseDivider } from "../../components/divider";
import { getWidth } from "../../theme/responsive";
import { FeaturedStores } from "./common/featuredStores";
import { RecommendedStores } from "./common/recommendedStores";

const Dashboard = ({ navigation }: ComPropsObject) => {
	return (
		<Layout navigation={navigation}>
			<DashboardContainer>
				{/* categorys search components */}
				<Categorys />

				{/* Recommended chats components */}
				<RecommendedChats />
				<BaseDivider />

				{/* Meet now components */}
				<MeetNow />
				<BaseDivider />

				{/* Recommended events components */}
				<RecommendedEvents />

				{/* Featured stores components */}
				<FeaturedStores />

				{/* Recommended stores components */}
				<RecommendedStores />
			</DashboardContainer>
		</Layout>
	)
}

const DashboardContainer = styled(View)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	padding: `${theme.globalSpacingX}px`,
	gap: getWidth(4),
}))

export { Dashboard }