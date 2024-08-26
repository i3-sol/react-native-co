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
import ModelClass from "../../classes/ModelClass";
import { useEffectCustom } from "../../classes/Functions";
import StorageClass from "../../classes/StorageClass";
import { useQuery } from '@tanstack/react-query';
import RestApiClass from "../../classes/RestApiClass";


const Dashboard = ({ navigation }: ComPropsObject) => {
	
	let user:any = useEffectCustom(async () => {	
		let Storage:StorageClass = new StorageClass("user");
		
		return await Storage.load()
	});	

	if (!user.id){
		return ""
	}

	return (
		<Layout navigation={navigation}>
			<DashboardContainer>
				{/* categorys search components */}
				<Categorys user={user} />

				{/* Recommended chats components */}
				<RecommendedChats user={user} />
				<BaseDivider />

				{/* Meet now components */}
				<MeetNow navigation={navigation} user={user} />
				<BaseDivider />

				{/* Recommended events components */}
				<RecommendedEvents user={user} />


				{/* Featured stores components */}
				<FeaturedStores user={user} />

				{/* Recommended stores components */}
				<RecommendedStores user={user} />
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