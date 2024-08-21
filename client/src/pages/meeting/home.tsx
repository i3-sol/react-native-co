import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import styled from "styled-components/native";

import { CurrentTopicThread } from "./common/current-topic-thread";

import { Layout } from "../../components/layout";
import { getHeight, getWidth } from "../../theme/responsive";
import { TextH3 } from "../../components/typography";
import { SearchInput } from "../../components/input";
import { arrowLeftIcon, plusIcon } from "../../assets/image";
import { Generation } from "./common/generation";
import { Recommend } from "./common/recommend";
import { SearchBySelecting } from "./common/search-by-selecting";


const MeetingHome = ({ navigation }: ComPropsObject) => {
	return (
		<View>
			<Layout navigation={navigation} disableHeader={true}>
				<MeetingHomeWrapper>
					<MeetingHomeHeader>
						<TextH3 style={styles.title}>オープンチャット検索</TextH3>
						<LeftIcon>
							<Image source={arrowLeftIcon} style={styles.backIcon} />
						</LeftIcon>
					</MeetingHomeHeader>

					<SearchInput />

					<CurrentTopicThread navigation={navigation} />

					<Generation navigation={navigation} />

					<Recommend navigation={navigation} />

					<SearchBySelecting navigation={navigation} />
				</MeetingHomeWrapper>
			</Layout>
			<CreateNewButton>
				<PlusImg source={plusIcon} />
				<CreateText>新規作成</CreateText>
			</CreateNewButton>
		</View>

	)
}

const MeetingHomeWrapper = styled(View)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	padding: getWidth(4),
	gap: getHeight(2.2),
}))

const MeetingHomeHeader = styled(View)(({ theme }) => ({
	position: 'relative'
}))

const LeftIcon = styled(View)(({ theme }) => ({
	position: 'absolute',
	top: getHeight(-.4),
	left: 0,
}))

const CreateNewButton = styled(Pressable)(({ theme }) => ({
	display: "flex",
	flexDirection: "row",
	alignItems: 'center',
	justifyContent: 'center',
	backgroundColor: '#9DE3E9',
	gap: getWidth(2),
	padding: getWidth(3.7),
	width: getWidth(31),
	borderRadius: 20,
	position: "absolute",
	left: getWidth(10),
	bottom: getHeight(5),
}))

const CreateText = styled(TextH3)(({ theme }) => ({
	fontSize: getWidth(3.7),
	fontWeight: 300,
}))

const PlusImg = styled(Image)(({ theme }) => ({
	width: getWidth(4.5),
	height: getWidth(4.5)
}))

const styles = StyleSheet.create({
	title: {
		textAlign: 'center'
	},
	backIcon: {
		height: getWidth(8),
		maxWidth: getWidth(8),
	}
})

export { MeetingHome };